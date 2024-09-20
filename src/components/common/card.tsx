import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export function Card({ children }: Props) {
  return <div className="border border-foreground rounded p-4">{children}</div>
}
