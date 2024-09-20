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
      className="bg-foreground text-background h-10 p-2 hover:opacity-80 rounded"
      disabled={pending}
    >
      {children}
    </button>
  )
}
