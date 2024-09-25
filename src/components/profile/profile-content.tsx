import { FollowList } from '@/components/profile/follow-list'
import { Profile } from '@/components/profile/profile'
import { getFollowers, getFollowing } from '@/lib/tapestry'

interface Props {
  username: string
}

export async function ProfileContent({ username }: Props) {
  const followers = await getFollowers({
    username,
  })

  const following = await getFollowing({
    username,
  })

  return (
    <div>
      <Profile username={username} />
      <FollowList followers={followers} following={following} />
    </div>
  )
}
