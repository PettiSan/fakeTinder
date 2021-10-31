import React from 'react'

/**
 * This components renders a floating helper to help visualize Tailwind Breakpoints
 * @returns JSX
 */
export function DevTools() {
  return (
    <div className="z-[9999] bg-[#000] text-[10px] text-[#FFF] pointer-events-none fixed right-0 bottom-0 opacity-50 p-2">
      <span className="hidden sm:inline">SM</span>
      <span className="hidden md:inline">- MD</span>
      <span className="hidden lg:inline">- LG</span>
      <span className="hidden xl:inline">- XL</span>
      <span className="hidden 2xl:inline">- 2XL</span>
    </div>
  )
}
