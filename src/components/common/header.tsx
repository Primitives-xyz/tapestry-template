'use client'

import { useCurrentWallet } from '@/components/auth/hooks/useCurrentWallet'
import { UnifiedWalletButton } from '@jup-ag/wallet-adapter'

export function Header() {
  const { walletAddress } = useCurrentWallet()

  console.log(walletAddress)
  return (
    <div className="flex items-center justify-between w-full mb-12">
      <h1 className="text-4xl">
        <a href="/" className="hover:opacity-80">
          Tapestry Boilerplate
        </a>
      </h1>
      <UnifiedWalletButton />
    </div>
  )
}
