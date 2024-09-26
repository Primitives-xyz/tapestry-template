'use client'

import { Check, Copy } from 'lucide-react'
import { useState } from 'react'

interface Props {
  content: string
}

export function CopyPaste({ content }: Props) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(content)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button onClick={handleCopy}>
      {copied ? <Check size={15} /> : <Copy size={15} />}
    </button>
  )
}
