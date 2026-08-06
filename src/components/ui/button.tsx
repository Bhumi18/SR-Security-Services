import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3DA5FF] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-[#0E4DB8] text-white shadow hover:bg-[#3DA5FF]",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-[#D9DEE8] bg-white text-[#1F2937] shadow-sm hover:border-[#0E4DB8] hover:text-[#0E4DB8]",
        secondary: "border border-[#D9DEE8] bg-white text-[#1F2937] shadow-sm hover:bg-[#EBF5FF] hover:border-[#0E4DB8]",
        ghost: "hover:bg-[#EBF5FF] hover:text-[#0E4DB8]",
        link: "text-[#0E4DB8] underline-offset-4 hover:text-[#3DA5FF] hover:underline",
        /* Primary corporate CTA: Royal Blue with Bright Accent Blue hover */
        hero: "bg-[#0E4DB8] text-white font-semibold shadow-md hover:bg-[#3DA5FF] hover:shadow-[0_8px_20px_-4px_rgba(61,165,255,0.4)] active:scale-98 transition-all duration-200",
        /* Primary CTA alias -> Royal Blue with Bright Accent Blue hover */
        gold: "bg-[#0E4DB8] text-white font-bold shadow-md hover:bg-[#3DA5FF] hover:shadow-[0_8px_20px_-4px_rgba(61,165,255,0.4)] active:scale-98 transition-all duration-200",
        /* Outline button on navy panels: White with Silver border, Bright Accent Blue hover */
        onNavy:
          "border border-white/30 bg-white/5 text-white font-semibold hover:border-[#3DA5FF] hover:text-[#3DA5FF] hover:bg-[#3DA5FF]/10 active:scale-98 transition-all duration-200",
        subtle: "bg-white text-[#1F2937] border border-[#D9DEE8] font-medium hover:border-[#0E4DB8] hover:text-[#0E4DB8] hover:shadow-xs active:scale-98 transition-all duration-200",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-9 rounded-md px-4 text-xs",
        lg: "h-12 rounded-lg px-7 text-[0.95rem]",
        xl: "h-14 rounded-xl px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
