"use client";

import React from "react";
import Link from "next/link";
import { motion, HTMLMotionProps } from "framer-motion";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  href,
  isLoading,
  leftIcon,
  rightIcon,
  className = "",
  disabled,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60";

  const variants = {
    primary:
      "bg-[#10231d] text-white shadow-[0_18px_44px_rgba(16,35,29,0.18)] hover:-translate-y-0.5 hover:bg-[#0b1814] focus:ring-[#10231d]",
    secondary:
      "bg-[#c7762b] text-white shadow-[0_18px_44px_rgba(199,118,43,0.22)] hover:-translate-y-0.5 hover:bg-[#b5661f] focus:ring-[#c7762b]",
    outline:
      "border border-[#10231d]/14 bg-white/75 text-[#10231d] hover:border-[#0f766e]/35 hover:bg-white focus:ring-[#0f766e]",
    ghost:
      "bg-transparent text-[#10231d] hover:bg-white/65 focus:ring-[#10231d]",
  } as const;

  const sizes = {
    sm: "px-4 py-2.5 text-sm",
    md: "px-6 py-3.5 text-sm sm:text-base",
    lg: "px-8 py-4 text-base sm:text-lg",
  } as const;

  const content = (
    <>
      {isLoading ? (
        <svg
          className="h-4 w-4 animate-spin"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4Zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647Z"
          />
        </svg>
      ) : (
        <>
          {leftIcon}
          <span>{children}</span>
          {rightIcon}
        </>
      )}
    </>
  );

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      className={classes}
      disabled={disabled || isLoading}
      {...props}
    >
      {content}
    </motion.button>
  );
};

export default Button;
