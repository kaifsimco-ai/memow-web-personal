"use client";
import React from "react";

type ButtonICProps = {
  label: string;
  icon?: React.ReactNode;
  onPress?: () => void;
  onClick?: () => void;
  className?: string;
  labelStyle?: string;
  iconPosition?: "start" | "end";
};
const ButtonIC: React.FC<ButtonICProps> = ({
  label,
  icon,
  onPress,
  onClick,
  className,
  labelStyle,
  iconPosition = "start",
}) => {
  return (
    <button
      className={`flex flex-row items-center justify-center   rounded-4xl ${className}`}
      onClick={onClick || onPress}
    >
      {iconPosition === "start" && icon}
      <span className={`${labelStyle} font-satoshi`}>{label}</span>
      {iconPosition === "end" && icon}
    </button>
  );
};

export default ButtonIC;
