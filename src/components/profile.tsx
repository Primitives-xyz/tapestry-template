import { getProfileInfo } from '@/lib/tapestry'
import Link from 'next/link'
import { Card } from './card'
import { Log } from './log'

interface Props {
  username: string
}

export async function Profile({ username }: Props) {
  const data = await getProfileInfo({
    username,
  })

  return (
    <Link href={`/${username}`}>
      <Card>
        <Log message={data} />
        <h2 className="text-xl mb-2">{data.profile[0].properties.username}</h2>
        <p>
          {data.socialCounts.followers} followers |{' '}
          {data.socialCounts.following} following
        </p>
      </Card>
    </Link>
  )
}
