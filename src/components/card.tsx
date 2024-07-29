interface Props {
  children: React.ReactNode
}

export function Card({ children }: Props) {
  return <div className="border border-foreground rounded p-4">{children}</div>
}
