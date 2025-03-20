import * as React from "react"

const CardProj = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={`border-2 border-slate-100  rounded-3xl bg-card text-card-foreground ${className}`}
    {...props}
  />
))
CardProj.displayName = "CardProj"

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={`p-6 pt-0 ${className}`} {...props} />
))
CardContent.displayName = "CardContent"

export { CardProj, CardContent }
