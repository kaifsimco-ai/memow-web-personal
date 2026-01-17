import React, { ReactNode } from "react";
import Image from "next/image";

interface IconWrapperProps {
  src: string;
  size?: number;
  className?: string;
}

interface FormFieldProps {
  icon: string | ReactNode;
  children: ReactNode;
  className?: string;
}

// Icon wrapper component for better reusability
const IconWrapper = ({
  src,
  size = 20,
  className = "h-5 w-5",
}: IconWrapperProps) => (
  <Image src={src} width={size} height={size} className={className} alt="" />
);

// Input field wrapper component
export const FormField = ({
  icon,
  children,
  className = "",
}: FormFieldProps) => (
  <div className={`relative ${className}`}>
    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 z-10">
      {typeof icon === "string" ? <IconWrapper src={icon} /> : icon}
    </div>
    {children}
  </div>
);
