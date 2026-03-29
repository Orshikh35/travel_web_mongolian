"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface CardProps {
    image?: string;
    title?: string;
    subtitle?: string;
    children?: React.ReactNode;
    className?: string;
    onClick?: () => void;
    badge?: string;
}

const Card: React.FC<CardProps> = ({
    image,
    title,
    subtitle,
    children,
    className = "",
    onClick,
    badge,
}) => {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className={`group relative bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-floating transition-all duration-300 ${className}`}
            onClick={onClick}
        >
            {image && (
                <div className="relative h-64 w-full overflow-hidden">
                    <Image
                        src={image}
                        alt={title || "Card image"}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {badge && (
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary-600 shadow-sm">
                            {badge}
                        </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
            )}

            <div className="p-6">
                {title && <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">{title}</h3>}
                {subtitle && <p className="text-sm text-gray-500 mb-4">{subtitle}</p>}
                {children}
            </div>
        </motion.div>
    );
};

export default Card;
