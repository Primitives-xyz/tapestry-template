'use client'

import { Button } from '@/components/common/button'

interface Props {
  username: string
  followersName: string
}

export function FollowButton({ username, followersName }: Props) {
  return (
    <Button
      onClick={() => console.log(`follow ${username} from ${followersName}`)}
    >
      Follow
    </Button>
  )
}

// const url = `${BASE_TAPESTRY_URL}followers/add?apiKey=${process.env.TAPESTRY_API_KEY}`
// const bodyString = JSON.stringify({
//   shouldWriteOnChain: true,
//   blockchain: 'Solana',
//   startId: followerUser.username, //moi
//   endId: followeeUser.username,   //celui que je veux suivre
//   properties: [],
// })
