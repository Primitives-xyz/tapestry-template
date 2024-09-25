'use client'

import { Button } from '@/components/common/button'
import { useFollowUser } from '@/components/profile/hooks/use-follow-user'
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
        <p>⌚️</p>
      ) : (
        <Button onClick={handleFollow} disabled={loading}>
          {loading ? 'Following...' : 'Follow'}
        </Button>
      )}

      {success && (
        <div className="alert alert-success">
          <strong>Success!</strong> Followed {username} successfully!
        </div>
      )}
      {error && (
        <div className="alert alert-error">
          <strong>Error:</strong> {error}
        </div>
      )}
    </>
  )
}
