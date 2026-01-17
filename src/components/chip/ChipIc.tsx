'use client'
import Image from 'next/image'
import React from 'react'
import clsx from 'clsx'

type Size = 'sm' | 'md' | 'lg'

interface ChipIcProps {
  label: string
  /** URL or ReactNode for custom icon */
  icon?: string | React.ReactNode
  /** Hide the icon entirely */
  hideIcon?: boolean
  /** Icon on left or right */
  iconPosition?: 'start' | 'end'
  /** Overall size variant (controls padding, gap, font size) */
  size?: Size
  /** Extra wrapper classes */
  className?: string
  /** Extra icon classes */
  iconClassName?: string
  /** Extra label classes */
  labelClassName?: string
}

export const ChipIc: React.FC<ChipIcProps> = ({
  label,
  icon,
  hideIcon = false,
  iconPosition = 'start',
  size = 'md',
  className,
  iconClassName,
  labelClassName,
}) => {
  // size variants
  const sizeStyles = {
    sm: {
      wrapper: 'px-2 py-1 gap-1 text-xs rounded-2xl',
      icon: 'w-3 h-3',
    },
    md: {
      wrapper: 'px-3 py-1 gap-2 text-sm rounded-2xl',
      icon: 'w-4 h-4',
    },
    lg: {
      wrapper: 'px-4 py-2 gap-3 text-base rounded-3xl',
      icon: 'w-5 h-5',
    },
  }[size]

  return (
    <div
      className={clsx(
        // 'inline-flex items-center bg-white border border-gray-300',
        sizeStyles.wrapper,
        className
      )}
    >
      {!hideIcon && icon && iconPosition === 'start' && (
        typeof icon === 'string' ? (
          <Image
            src={icon}
            alt=""
            width={24}
            height={24}
            className={clsx(sizeStyles.icon, iconClassName)}
          />
        ) : (
          <span className={clsx(sizeStyles.icon, iconClassName)}>
            {icon}
          </span>
        )
      )}

      <span className={clsx('font-satoshi font-light', labelClassName)}>
        {label}
      </span>

      {!hideIcon && icon && iconPosition === 'end' && (
        typeof icon === 'string' ? (
          <Image
            src={icon}
            alt=""
            width={24}
            height={24}
            className={clsx(sizeStyles.icon, iconClassName)}
          />
        ) : (
          <span className={clsx(sizeStyles.icon, iconClassName)}>
            {icon}
          </span>
        )
      )}
    </div>
  )
}

export default ChipIc
