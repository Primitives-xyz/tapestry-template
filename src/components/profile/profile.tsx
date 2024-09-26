import { FollowButton } from '@/components/profile/follow-button'
import { ProfileInfos } from '@/components/profile/profile-infos'
import { getProfileInfo } from '@/lib/tapestry'
import { Card } from '../common/card'
interface Props {
  username: string
}

export async function Profile({ username }: Props) {
  const data = await getProfileInfo({
    username,
  })

  return (
    <Card>
      <div className="flex justify-between items-center">
        <div className="flex flex-col justify-center space-y-2 w-full h-full">
          <ProfileInfos
            username={username}
            walletAddress={data.walletAddress || ''}
          />

          <p>
            {data.socialCounts.followers} followers |{' '}
            {data.socialCounts.following} following
          </p>
        </div>
        <FollowButton username={username} />
      </div>
    </Card>
  )
}
