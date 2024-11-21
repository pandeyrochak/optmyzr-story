import { cn } from "../../lib/utils"
import { VariantProps, cva } from "class-variance-authority"
import { HTMLAttributes, forwardRef } from "react"

const typographyVariants = cva("text-darkGrey", {
  variants: {
    variant: {
      h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
      h2: "scroll-m-20 text-3xl font-semibold tracking-tight",
      h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
      h4: "scroll-m-20 text-xl font-semibold tracking-tight",
      h5: "scroll-m-20 text-lg font-semibold tracking-tight",
      h6: "scroll-m-20 text-[18px] font-semibold tracking-tight",
      subtitle1: "text-xl font-medium leading-7",
      subtitle2: "text-lg font-medium leading-7",
      body1: "text-base font-normal leading-7",
      body2: "text-sm font-normal leading-6",
      body3: "text-xs font-normal leading-normal",
      label: "text-sm font-normal leading-none text-midGrey",
    },
  },
  defaultVariants: {
    variant: "body1",
  },
})

interface TypographyProps
  extends HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement>,
    VariantProps<typeof typographyVariants> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div"
}

const Typography = forwardRef<HTMLHeadingElement | HTMLParagraphElement, TypographyProps>(
  ({ className, variant, as, children, ...props }, ref) => {
    const Component = as || getDefaultElement(variant)

    return (
      <Component
        ref={ref}
        className={cn(typographyVariants({ variant }), className)}
        {...props}
      >
        {children}
      </Component>
    )
  }
)

function getDefaultElement(
  variant: TypographyProps['variant']
): "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" {
  switch (variant) {
    case "h1":
      return "h1"
    case "h2":
      return "h2"
    case "h3":
      return "h3"
    case "h4":
      return "h4"
    case "h5":
      return "h5"
    case "h6":
      return "h6"
    default:
      return "p"
  }
}

Typography.displayName = "Typography"

export { Typography, typographyVariants, type TypographyProps }
