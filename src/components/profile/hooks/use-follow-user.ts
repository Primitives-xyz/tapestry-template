'use client'

import { useState } from 'react'

interface FollowUserProps {
  followerUsername: string
  followeeUsername: string
}

export const useFollowUser = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const [data, setData] = useState<any>(null)
  const [success, setSuccess] = useState<boolean>(false) // Ajout de l'état de succès

  const followUser = async ({
    followerUsername,
    followeeUsername,
  }: FollowUserProps) => {
    setLoading(true)
    setError(null)
    setData(null)
    setSuccess(false)

    try {
      const response = await fetch('/api/followers/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          followerUser: { username: followerUsername },
          followeeUser: { username: followeeUsername },
        }),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to follow user')
      }

      setData(result)
      setSuccess(true)
    } catch (err: any) {
      setError(err.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return { followUser, loading, error, success, data }
}
