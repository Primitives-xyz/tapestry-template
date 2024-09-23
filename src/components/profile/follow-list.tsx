'use client'

import { Button } from '@/components/common/button'
import Link from 'next/link'
import { useState } from 'react'

export function FollowList() {
  const [followingListSelected, setFollowingListSelected] = useState(true)

  const following = [
    { username: 'john123' },
    { username: 'jane_doe' },
    { username: 'alice_wonder' },
    { username: 'bob_the_builder' },
    { username: 'charlie_chap' },
    { username: 'emily1234' },
    { username: 'frank_smith' },
    { username: 'grace_t' },
    { username: 'harry_potter' },
    { username: 'ivy_gardner' },
  ]

  const followers = [
    { username: 'laura_king' },
    { username: 'georgeH' },
    { username: 'sophia_love' },
    { username: 'michael88' },
    { username: 'david_thegreat' },
    { username: 'anna_banana' },
    { username: 'paul_allen' },
    { username: 'olivia_sky' },
    { username: 'will_adams' },
    { username: 'emma_nelson' },
  ]

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
                <ListEntries key={index} username={item.username} />
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
