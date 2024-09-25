import { X } from 'lucide-react'
import { useEffect, useState } from 'react'

interface AlertProps {
  type?: 'success' | 'error' | 'info'
  message: string
  duration?: number
}

export const Alert = ({
  type = 'info',
  message,
  duration = 5000,
}: AlertProps) => {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false)
    }, duration)

    return () => clearTimeout(timer)
  }, [duration])

  if (!visible) return null

  const backgroundColor =
    type === 'success'
      ? 'bg-green-100 border-green-400 text-green-700'
      : type === 'error'
        ? 'bg-red-100 border-red-400 text-red-700'
        : 'bg-blue-100 border-blue-400 text-blue-700'

  return (
    <div
      className={`fixed bottom-4 left-4 ${backgroundColor} border px-4 py-3 rounded-lg shadow-lg`}
      role="alert"
    >
      <div className="flex items-center justify-center">
        <strong className="font-bold">
          {type === 'success' && 'Success!'}
          {type === 'error' && 'Error!'}
          {type === 'info' && 'Info!'}
        </strong>
        <span className="block sm:inline ml-2">{message}</span>
        <button onClick={() => setVisible(false)} className="ml-4">
          <X size={20} />
        </button>
      </div>
    </div>
  )
}
