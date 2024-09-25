import { FollowButton } from '@/components/profile/follow-button'
import { getProfileInfo } from '@/lib/tapestry'
import { IFollower } from '@/models/followers.models'
import { UserRoundCheck } from 'lucide-react'
import Link from 'next/link'
import { Card } from '../common/card'
interface Props {
  username: string
  followers?: IFollower[]
}

export async function Profile({ username, followers }: Props) {
  const data = await getProfileInfo({
    username,
  })

  const followersList = followers?.map(
    (item, index) => item.properties.username,
  )

  return (
    <Card>
      <div className="flex justify-between items-center">
        <Link href={`/${username}`} className="w-full font-bold">
          <div className="flex flex-col justify-center space-y-2 w-full h-full">
            <h2 className="text-xl">{username}</h2>
            <p>
              {data.socialCounts.followers} followers |{' '}
              {data.socialCounts.following} following
            </p>
          </div>
        </Link>
        {followersList?.includes(username) ? (
          <UserRoundCheck size={20} />
        ) : (
          <FollowButton username={username} />
        )}
      </div>
    </Card>
  )
}
