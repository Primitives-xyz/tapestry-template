'use client'

import { Button } from '@/components/common/button'
import { useCurrentWallet } from '../auth/hooks/useCurrentWallet'
import { useProfiles } from '../auth/hooks/useFindProfiles'

interface Props {
  username: string
}

export function FollowButton({ username }: Props) {
  const { walletAddress } = useCurrentWallet()

  const { profiles, loading, error } = useProfiles(walletAddress || '')

  if (loading) return <div>Loading...</div>

  if (!!profiles && profiles.length > 0) {
    const mainProfile = profiles[0].profile
    return (
      <Button
        onClick={() =>
          console.log(
            `follow ${username} from ${mainProfile.properties.username}`,
          )
        }
      >
        Follow
      </Button>
    )
  }

  return null
}

// TODO: Hook up to backend
// const url = `${BASE_TAPESTRY_URL}followers/add?apiKey=${process.env.TAPESTRY_API_KEY}`
// const bodyString = JSON.stringify({
//   shouldWriteOnChain: true,
//   blockchain: 'Solana',
//   startId: followerUser.username, //moi
//   endId: followeeUser.username,   //celui que je veux suivre
//   properties: [],
// })
