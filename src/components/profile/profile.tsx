'use client'

import { Card } from '@/components/common/card'
import { CopyPaste } from '@/components/common/copy-paste'
import { FollowButton } from '@/components/profile/follow-button'
import { useGetProfileInfo } from '@/components/profile/hooks/use-get-profile-info'
import { User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  username: string
}

export function Profile({ username }: Props) {
  const { data } = useGetProfileInfo({ username })

  return (
    <Card>
      <div className="flex justify-between items-center">
        <div className="flex flex-col justify-center space-y-2 w-full h-full">
          <div className="flex items-end space-x-4">
            {data?.profile?.image ? (
              <div>
                <Image
                  src={data.profile.image}
                  width={40}
                  height={40}
                  alt="avatar"
                  className="object-cover rounded-full"
                  unoptimized
                />
              </div>
            ) : (
              <div className="h-10 w-10 bg-muted-light rounded-full flex items-center justify-center">
                <User />
              </div>
            )}
            <Link href={`/${username}`} className="w-full font-bold">
              <h2 className="text-xl">{username}</h2>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <p className="text-sm text-gray">{data?.walletAddress}</p>
            {data?.walletAddress && <CopyPaste content={data?.walletAddress} />}
          </div>
          <p>
            {data?.socialCounts.followers} followers |{' '}
            {data?.socialCounts.following} following
          </p>
          <div className="mt-4">
            <p className="text-gray">{data?.profile?.bio}</p>
          </div>
        </div>
        <FollowButton username={username} />
      </div>
    </Card>
  )
}
