'use client'

import { Button } from '@/components/common/button'
import { IFollower } from '@/models/followers.models'
import Link from 'next/link'
import { useState } from 'react'

interface Props {
  following: IFollower[]
  followers: IFollower[]
}

export function FollowList({ following, followers }: Props) {
  const [followingListSelected, setFollowingListSelected] = useState(true)

  return (
    <div className="flex w-full space-x-6">
      <div className="w-1/2 flex flex-col border rounded mt-6">
        <div className="w-full flex justify-center py-4 space-x-6">
          <Button
            onClick={() => setFollowingListSelected(true)}
            active={followingListSelected}
          >
            Following
          </Button>
          <Button
            onClick={() => setFollowingListSelected(false)}
            active={!followingListSelected}
          >
            Followers
          </Button>
        </div>
        <div className="h-[200px] overflow-auto">
          {(followingListSelected ? following : followers).map(
            (item, index) => (
              <ul key={index} className="list-disc list-inside">
                <ListEntries key={index} username={item.properties.username} />
              </ul>
            ),
          )}
        </div>
      </div>
      <div className="w-1/2 flex flex-col border rounded mt-6"></div>
    </div>
  )
}

function ListEntries({ username }: { username: string }) {
  return (
    <li className="ml-4 hover:underline">
      <Link href={`/${username}`}>{username}</Link>
    </li>
  )
}
