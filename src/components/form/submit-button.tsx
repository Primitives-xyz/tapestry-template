'use client'

import { useFormStatus } from 'react-dom'

interface Props {
  children: React.ReactNode
}

export function SubmitButton({ children }: Props) {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      className="bg-foreground text-background p-2"
      disabled={pending}
    >
      {children}
    </button>
  )
}
