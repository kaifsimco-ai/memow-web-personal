"use client";

import React from "react";
import { cn } from "@/lib/utils";

type GradientButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  variant?: "primary" | "secondary" | "success" | "custom";
  size?: "sm" | "md" | "lg" | "xl";
  type?: "button" | "submit" | "reset";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const GradientButton: React.FC<GradientButtonProps> = ({
  children,
  className,
  onClick,
  disabled = false,
  variant = "primary",
  size = "md",
  type = "button",
  ...props
}) => {
  const variants: Record<
    NonNullable<GradientButtonProps["variant"]>,
    string
  > = {
    primary: "bg-gradient-to-r from-[#FECE2F] via-[#FC9106] to-[#E94057]",
    secondary: "bg-gradient-to-r from-[#667eea] to-[#764ba2]",
    success: "bg-gradient-to-r from-[#11998e] to-[#38ef7d]",
    custom: "", // For custom gradients
  };

  const sizes: Record<NonNullable<GradientButtonProps["size"]>, string> = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
    xl: "px-8 py-4 text-xl",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        // Base styles
        "relative inline-flex items-center justify-center font-medium text-white rounded-lg transition-all duration-200 ease-in-out transform",
        // Focus styles
        // "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500/50",
        // Disabled styles
        "disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none",
        // Gradient variant
        variants[variant],
        // Size variant
        sizes[size],
        // Custom className
        className
      )}
      {...props}
    >
      {/* Gradient overlay effect (on hover/focus if needed) */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#FECE2F] via-[#FC9106] to-[#E94057] opacity-0 transition-opacity duration-200" />

      {/* Content */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
};

export default GradientButton;
