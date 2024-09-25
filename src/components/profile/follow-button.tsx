'use client'

import { Alert } from '@/components/common/alert'
import { Button } from '@/components/common/button'
import { useFollowUser } from '@/components/profile/hooks/use-follow-user'
import { LoaderCircle } from 'lucide-react'
import { useCurrentWallet } from '../auth/hooks/useCurrentWallet'

interface Props {
  username: string
}

export function FollowButton({ username }: Props) {
  const { walletAddress, mainUsername, loadingMainUsername } =
    useCurrentWallet()
  const { followUser, loading, error, success } = useFollowUser()

  const handleFollow = async () => {
    if (mainUsername && username) {
      await followUser({
        followerUsername: mainUsername,
        followeeUsername: username,
      })
    }
  }

  if (!walletAddress) {
    return null
  }

  return (
    <>
      {loadingMainUsername ? (
        <span>
          <LoaderCircle />
        </span>
      ) : (
        <Button onClick={handleFollow} disabled={loading}>
          {loading ? 'Following...' : 'Follow'}
        </Button>
      )}

      {success && (
        <Alert
          type="success"
          message="Followed user successfully!"
          duration={5000}
        />
      )}

      {error && (
        <Alert
          type="error"
          message="There was an error following the user."
          duration={5000}
        />
      )}
    </>
  )
}
