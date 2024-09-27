import { useEffect, useState } from 'react'

export const useGetProfiles = (walletAddress: string) => {
  const [profiles, setProfiles] = useState<any>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<any>(null)

  useEffect(() => {
    if (!walletAddress) return

    const fetchProfiles = async () => {
      setLoading(true)
      try {
        const res = await fetch(`/api/profiles?walletAddress=${walletAddress}`)
        if (!res.ok) {
          const errorData = await res.json()
          throw new Error(errorData.error || 'Failed to fetch profiles')
        }
        const data = await res.json()
        setProfiles(data.profiles)
      } catch (err: any) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    fetchProfiles()
  }, [walletAddress])

  return { profiles, loading, error }
}
