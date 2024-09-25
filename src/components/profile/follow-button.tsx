'use client'

import { Button } from '@/components/common/button'
import { useCurrentWallet } from '../auth/hooks/useCurrentWallet'

interface Props {
  username: string
}

export function FollowButton({ username }: Props) {
  const { mainUsername } = useCurrentWallet()

  if (mainUsername) {
    return (
      <Button
        onClick={() => console.log(`follow ${username} from ${mainUsername}`)}
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
