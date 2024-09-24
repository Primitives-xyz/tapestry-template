import { FollowList } from '@/components/profile/follow-list'
import { Profile } from '@/components/profile/profile'
import { getFollowers, getFollowing } from '@/lib/tapestry'
import { Log } from '@/utils/log'

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

  console.log('FOLLOWERS', followers)
  console.log('FOLLOWING', following)

  return (
    <div>
      <Log message={{ following }} />
      <Log message={{ followers }} />
      <Profile username={username} />
      <FollowList followers={followers} following={following} />
    </div>
  )
}
