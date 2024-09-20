'use client'

import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  onClick?: () => void
  disabled?: boolean
}

export function Button({ children, disabled, onClick }: Props) {
  return (
    <button
      className="bg-foreground text-background h-10 p-2 hover:opacity-80 rounded"
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
