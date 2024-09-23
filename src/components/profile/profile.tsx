import { FollowButton } from '@/components/profile/follow-button'
import { getFollowers, getFollowing, getProfileInfo } from '@/lib/tapestry'
import { Log } from '@/utils/log'
import Link from 'next/link'
import { Card } from '../common/card'
interface Props {
  username: string
}

export async function Profile({ username }: Props) {
  const data = await getProfileInfo({
    username,
  })

  console.log(username)

  const followers = await getFollowers({
    username: data.profile.properties?.id || '',
  })

  const following = await getFollowing({
    username: data.profile.properties?.id || '',
  })

  console.log({ followers, following })

  //https://api.usetapestry.dev/docs
  //https://api.usetapestry.dev/docs#tag/followers/POST/followers/add

  return (
    <Card>
      <Log message={{ username }} />
      <Log message={{ data }} />
      <Log message={data.profile.properties?.namespace} />
      <Log message={{ followers }} />
      <Log message={{ following }} />
      <div className="flex justify-between items-center">
        <Link href={`/${username}`} className="w-full">
          <div className="flex flex-col justify-center space-y-2 w-full h-full">
            <h2 className="text-xl">{username}</h2>
            <p>
              {data.socialCounts.followers} followers |{' '}
              {data.socialCounts.following} following
            </p>
          </div>
        </Link>
        <FollowButton username="cédrick" followersName={username} />
      </div>
    </Card>
  )
}
