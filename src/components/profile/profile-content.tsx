import { FollowList } from '@/components/profile/follow-list'
import { Profile } from '@/components/profile/profile'
import { DisplaySuggestedAndInvite } from '@/components/suggested-and-creators-invite/hooks/display-suggested-and-invite'
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
      <div className="flex w-full justify-between space-x-4 mt-4">
        <FollowList followers={followers} following={following} />
        <DisplaySuggestedAndInvite username={username} />
      </div>
    </div>
  )
}
