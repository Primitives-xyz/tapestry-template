'use client'

import { useCurrentWallet } from '@/components/auth/hooks/useCurrentWallet'
import { useProfiles } from '@/components/auth/hooks/useFindProfiles'

import { UnifiedWalletButton } from '@jup-ag/wallet-adapter'
import Link from 'next/link'

export function Header() {
  const { walletAddress } = useCurrentWallet()

  const { profiles, loading, error } = useProfiles(walletAddress || '')

  console.log('profiles: ', profiles)

  return (
    <div className="flex items-center justify-between w-full mb-12">
      <h1 className="text-4xl">
        <Link href="/" className="hover:opacity-80">
          Tapestry Boilerplate
        </Link>
      </h1>
      <div>
        <UnifiedWalletButton />
      </div>
    </div>
  )
}
