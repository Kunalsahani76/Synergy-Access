import * as React from "react"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    // Define base classes
    const baseClasses = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
    
    // Define variant classes
    const variantClasses = {
      default: "bg-blue-600 text-white hover:bg-blue-700 shadow-sm",
      destructive: "bg-red-600 text-white hover:bg-red-700 shadow-sm",
      outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground shadow-sm",
      secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200 shadow-sm",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-blue-600 underline-offset-4 hover:underline"
    }
    
    // Define size classes
    const sizeClasses = {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3 text-xs",
      lg: "h-11 rounded-md px-8 text-lg",
      icon: "h-10 w-10"
    }
    
    // Combine classes
    const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className || ""}`
    
    const Comp = asChild ? "span" : "button"
    return (
      <Comp
        className={classes}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }