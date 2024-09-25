import { FollowButton } from '@/components/profile/follow-button'
import { getProfileInfo } from '@/lib/tapestry'
import Link from 'next/link'
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
        <Link href={`/${username}`} className="w-full font-bold">
          <div className="flex flex-col justify-center space-y-2 w-full h-full">
            <h2 className="text-xl">{username}</h2>
            <span className="text-sm text-gray-500">{data.walletAddress}</span>
            <p>
              {data.socialCounts.followers} followers |{' '}
              {data.socialCounts.following} following
            </p>
          </div>
        </Link>
        <FollowButton username={username} />
      </div>
    </Card>
  )
}
