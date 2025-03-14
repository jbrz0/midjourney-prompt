"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-black text-white hover:bg-black/80",
        secondary:
          "border-transparent bg-gray-100 text-gray-900 hover:bg-gray-200/80",
        destructive:
          "border-transparent bg-red-500 text-white hover:bg-red-600/80",
        outline: "text-black",
        parameter: "border-transparent bg-blue-100 text-blue-800 hover:bg-blue-200",
        style: "border-transparent bg-purple-100 text-purple-800 hover:bg-purple-200",
        aspect: "border-transparent bg-green-100 text-green-800 hover:bg-green-200",
        negative: "border-transparent bg-red-100 text-red-800 hover:bg-red-200",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  onRemove?: () => void;
}

function Badge({ className, variant, onRemove, children, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props}>
      {children}
      {onRemove && (
        <button
          className="ml-1 rounded-full text-[10px] font-semibold hover:text-black/80"
          onClick={(e) => {
            e.stopPropagation();
            onRemove();
          }}
        >
          ✕
        </button>
      )}
    </div>
  );
}

export { Badge, badgeVariants }; 