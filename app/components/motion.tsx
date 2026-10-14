"use client";

import React, { useEffect, useRef } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
  type Variants,
} from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

// Fades and lifts its children into place the first time they scroll into view.
export const Reveal = ({
  children,
  delay = 0,
  y = 28,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.25 }}
    transition={{ duration: 0.8, delay, ease: EASE }}
    className={className}
  >
    {children}
  </motion.div>
);

const splitContainer: Variants = {
  hidden: {},
  visible: ({ stagger, delay }: { stagger: number; delay: number }) => ({
    transition: { staggerChildren: stagger, delayChildren: delay },
  }),
};

const splitPiece: Variants = {
  hidden: { y: "110%", opacity: 0 },
  visible: { y: "0%", opacity: 1, transition: { duration: 0.75, ease: EASE } },
};

// Reveals text word by word (or character by character for scripts without spaces, like 中文 / 日本語).
export const SplitText = ({
  text,
  className = "",
  delay = 0,
  onView = true,
}: {
  text: string;
  className?: string;
  delay?: number;
  onView?: boolean;
}) => {
  const hasSpaces = text.includes(" ");
  const pieces = hasSpaces ? text.split(" ") : Array.from(text);
  const stagger = hasSpaces ? 0.06 : 0.025;
  const trigger = onView
    ? { whileInView: "visible", viewport: { once: true, amount: 0.5 } }
    : { animate: "visible" };

  return (
    <motion.span
      // Remount when the language changes so the new text animates in too.
      key={text}
      className={className}
      initial="hidden"
      {...trigger}
      variants={splitContainer}
      custom={{ stagger, delay }}
    >
      <span className="sr-only">{text}</span>
      {pieces.map((piece, index) => (
        <span key={`${piece}-${index}`} aria-hidden="true" className="inline-block overflow-hidden pb-[0.12em] align-top">
          <motion.span className="inline-block" variants={splitPiece}>
            {piece}
            {hasSpaces && index < pieces.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
};

// Counts the leading number of strings like "98%", "120+", "4.9/5" up from zero when visible.
export const CountUp = ({ value, className = "" }: { value: string; className?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();

  useEffect(() => {
    const match = value.match(/^(\d+(?:\.\d+)?)(.*)$/);
    if (!match || !inView || reduce || !ref.current) return;
    const target = Number(match[1]);
    const decimals = match[1].includes(".") ? match[1].split(".")[1].length : 0;
    const suffix = match[2];
    const node = ref.current;
    const controls = animate(0, target, {
      duration: 1.6,
      ease: EASE,
      onUpdate: (latest) => {
        node.textContent = `${latest.toFixed(decimals)}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, reduce, value]);

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {value}
    </span>
  );
};

// Moves an element against the scroll direction for a sense of depth. Returns 0 when motion is reduced.
export const useParallax = (target: React.RefObject<HTMLElement | null>, distance = 80): MotionValue<number> => {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target, offset: ["start end", "end start"] });
  return useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [-distance, distance]);
};

// Card whose background lights up under the cursor.
export const SpotlightCard = ({
  children,
  className = "",
  color = "rgba(15,118,110,0.12)",
}: {
  children: React.ReactNode;
  className?: string;
  color?: string;
}) => {
  const x = useMotionValue(-400);
  const y = useMotionValue(-400);
  const background = useTransform(
    [x, y],
    ([latestX, latestY]) => `radial-gradient(380px circle at ${latestX}px ${latestY}px, ${color}, transparent 70%)`,
  );

  return (
    <div
      onPointerMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        x.set(event.clientX - rect.left);
        y.set(event.clientY - rect.top);
      }}
      onPointerLeave={() => {
        x.set(-400);
        y.set(-400);
      }}
      className={`group/spot relative overflow-hidden ${className}`}
    >
      <motion.div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover/spot:opacity-100" style={{ background }} />
      <div className="relative h-full">{children}</div>
    </div>
  );
};

// Gentle 3D tilt that follows the pointer (mouse/pen only, never on touch).
export const useTilt = (max = 6) => {
  const reduce = useReducedMotion();
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const springConfig = { stiffness: 220, damping: 22, mass: 0.6 };
  const rotateX = useSpring(useTransform(py, [0, 1], [max, -max]), springConfig);
  const rotateY = useSpring(useTransform(px, [0, 1], [-max, max]), springConfig);
  const shine = useTransform(
    [px, py],
    ([x, y]) => `radial-gradient(420px circle at ${Number(x) * 100}% ${Number(y) * 100}%, rgba(255,255,255,0.22), transparent 55%)`,
  );

  const handlers = {
    onPointerMove: (event: React.PointerEvent<HTMLElement>) => {
      if (reduce || event.pointerType === "touch") return;
      const rect = event.currentTarget.getBoundingClientRect();
      px.set((event.clientX - rect.left) / rect.width);
      py.set((event.clientY - rect.top) / rect.height);
    },
    onPointerLeave: () => {
      px.set(0.5);
      py.set(0.5);
    },
  };

  return { rotateX, rotateY, shine, handlers };
};

// Endless horizontal ticker. Content is rendered twice so the loop is seamless.
export const Marquee = ({ items, className = "" }: { items: string[]; className?: string }) => (
  <div className={`group/marquee flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)] ${className}`}>
    {[0, 1].map((copy) => (
      <ul
        key={copy}
        aria-hidden={copy === 1}
        className="flex shrink-0 animate-marquee items-center gap-10 pr-10 group-hover/marquee:[animation-play-state:paused]"
      >
        {items.map((item) => (
          <li key={`${copy}-${item}`} className="flex items-center gap-10 whitespace-nowrap">
            <span>{item}</span>
            <span aria-hidden="true" className="text-sand">
              ✦
            </span>
          </li>
        ))}
      </ul>
    ))}
  </div>
);
