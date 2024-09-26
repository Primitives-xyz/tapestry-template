'use client'

import classNames from 'classnames'
import { ReactNode } from 'react'
interface Props {
  children: ReactNode
  onClick?: () => void
  disabled?: boolean
  active?: boolean
  className?: string
}

export function Button({
  children,
  disabled,
  active = true,
  className,
  onClick,
}: Props) {
  return (
    <button
      className={classNames(
        className,
        'h-10 p-2 hover:opacity-80 rounded',
        active
          ? 'bg-foreground text-background border border-transparent'
          : 'bg-background text-foreground border border-foreground',
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
