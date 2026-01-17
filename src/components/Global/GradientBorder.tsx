type GradientBorderProps = {
  children: React.ReactNode
  className?: string
  borderWidth?: string
  rounded?:string
}

export function GradientBorder({ 
  children, 
  className = "",
  borderWidth = "2px" ,
  rounded = "rounded-3xl",
}: GradientBorderProps) {
  return (
    <div
      className={`relative bg-gradient-to-r from-[#FECE2F] to-[#C13584] max-w-fit ${rounded}`}
      style={{ padding: borderWidth }}
    >
      {/* Inner content now handles centering */}
      <div className={`w-full h-full bg-white dark:bg-background rounded-[inherit] flex flex-row items-center justify-start max-w-fit px-2.5 ${className}`}>
        {children}
      </div>
    </div>
  )
}