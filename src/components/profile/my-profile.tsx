'use client'

import { Card } from '@/components/common/card'
import { CopyPaste } from '@/components/common/copy-paste'
import { Bio } from '@/components/profile/bio'
import { FollowButton } from '@/components/profile/follow-button'
import { useGetProfileInfo } from '@/components/profile/hooks/use-get-profile-info'
import Image from 'next/image'

interface Props {
  username: string
}

export function MyProfile({ username }: Props) {
  const { data, refetch } = useGetProfileInfo({ username })

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
                />
              </div>
            ) : (
              <div className="h-10 w-10 bg-muted rounded-full" />
            )}
            <h2 className="w-full font-bold text-xl">{username}</h2>
          </div>

          <div className="flex items-center space-x-4">
            <p className="text-sm text-gray">{data?.walletAddress}</p>
            {data?.walletAddress && <CopyPaste content={data?.walletAddress} />}
          </div>
          <p>
            {data?.socialCounts.followers} followers |{' '}
            {data?.socialCounts.following} following
          </p>
          <Bio username={username} data={data} refetch={refetch} />
        </div>
        <FollowButton username={username} />
      </div>
    </Card>
  )
}
