"use client";

import React from "react";
import { motion } from "framer-motion";
import { SplitText } from "./motion";

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  as?: "h1" | "h2";
  align?: "left" | "center";
  className?: string;
};

const SectionHeading = ({ eyebrow, title, description, as: Heading = "h2", align = "left", className = "" }: Props) => (
  <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""} ${className}`}>
    <motion.span
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 0.6 }}
      className="section-eyebrow"
    >
      {eyebrow}
    </motion.span>
    <Heading className="section-title">
      <SplitText text={title} delay={0.1} />
    </Heading>
    {description ? (
      <motion.p
        key={description}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.7, delay: 0.25 }}
        className={`section-copy mt-5 ${align === "center" ? "mx-auto" : ""} max-w-2xl`}
      >
        {description}
      </motion.p>
    ) : null}
  </div>
);

export default SectionHeading;
