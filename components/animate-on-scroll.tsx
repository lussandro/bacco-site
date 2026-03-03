"use client"

import { useInView } from "@/hooks/use-in-view"
import type { ReactNode } from "react"

export function AnimateOnScroll({ children, className = "" }: { children: ReactNode; className?: string }) {
  const { ref, isInView } = useInView()

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  )
}
