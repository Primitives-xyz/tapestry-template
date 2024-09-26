import { useState } from 'react'

export const useCreateProfile = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [response, setResponse] = useState<any>(null)

  const createProfile = async (username: string, walletAddress: string) => {
    setLoading(true)
    setError(null)

    try {
      const formData = new FormData()
      formData.append('username', username)
      formData.append('ownerWalletAddress', walletAddress)

      const res = await fetch('/api/profiles/create', {
        method: 'POST',
        body: formData,
      })

      if (!res.ok) {
        const errorResponse = await res.json()
        throw new Error(errorResponse.error || 'Failed to create profile')
      }

      const data = await res.json()
      setResponse(data)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return { createProfile, loading, error, response }
}
