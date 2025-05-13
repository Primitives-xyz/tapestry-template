'use client'

import { CopyPaste } from '@/components/common/copy-paste'
import { LoadCircle } from '@/components/common/load-circle'
import { useWalletAssets } from './hooks/use-wallet-assets'

interface PortfolioSummaryProps {
  walletAddress: string
}

export function PortfolioSummary({ walletAddress }: PortfolioSummaryProps) {
  const { stats, loading, error } = useWalletAssets(walletAddress)

  if (loading) {
    return (
      <div className="flex justify-center py-4">
        <LoadCircle />
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-muted-light p-4 rounded-md">
        <div className="flex justify-between items-center">
          <h3 className="text-sm font-medium text-gray">Wallet</h3>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray truncate max-w-[120px]">
              {walletAddress}
            </span>
            <CopyPaste content={walletAddress} />
          </div>
        </div>
        <div className="mt-2 text-red-500 text-sm">
          Error loading portfolio data
        </div>
      </div>
    )
  }

  return (
    <div className="bg-muted-light p-4 rounded-md">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-sm font-medium text-gray">Wallet</h3>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray truncate max-w-[120px]">
            {walletAddress}
          </span>
          <CopyPaste content={walletAddress} />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-4">
        <div className="text-center">
          <p className="text-sm text-gray">Portfolio Value</p>
          <p className="text-lg font-bold">
            ${stats?.totalValue.toFixed(2) || '0.00'}
          </p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray">Tokens</p>
          <p className="text-lg font-bold">{stats?.tokenCount || 0}</p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray">NFTs</p>
          <p className="text-lg font-bold">{stats?.nftCount || 0}</p>
        </div>
      </div>
    </div>
  )
}
