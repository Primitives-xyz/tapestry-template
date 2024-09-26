import { useState } from 'react'

export const useSuggestedProfiles = () => {
  const [profiles, setProfiles] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const getSuggestedProfiles = async (walletAddress: string) => {
    if (!walletAddress) {
      setError('Owner wallet address is required')
      return
    }

    setLoading(true)
    setError(null)

    try {
      const response = await fetch(
        `/api/profiles/suggestedProfiles?ownerWalletAddress=${walletAddress}`,
      )

      if (!response.ok) {
        throw new Error('Failed to fetch suggested profiles')
      }

      const data = await response.json()
      setProfiles(data)
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred')
    } finally {
      setLoading(false)
    }
  }

  return {
    profiles,
    loading,
    error,
    getSuggestedProfiles,
  }
}
