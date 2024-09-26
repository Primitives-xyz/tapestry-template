'use client'

import { CopyPaste } from '@/components/common/copy-paste'
import Link from 'next/link'

interface Props {
  username: string
  walletAddress: string
}

export function ProfileInfos({ username, walletAddress }: Props) {
  return (
    <>
      <Link href={`/${username}`} className="w-full font-bold">
        <h2 className="text-xl">{username}</h2>
      </Link>
      <div className="flex items-center space-x-4">
        <p className="text-sm text-gray-500">{walletAddress}</p>
        <CopyPaste content={walletAddress} />
      </div>
    </>
  )
}
