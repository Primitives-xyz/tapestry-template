import { FollowList } from '@/components/profile/follow-list'
import { Profile } from '@/components/profile/profile'

interface Props {
  username: string
}

export async function ProfileContent({ username }: Props) {
  return (
    <div>
      <Profile username={username} />
      <FollowList username={username} />
    </div>
  )
}
