'use client'

import { LoadCircle } from '@/components/common/load-circle'
import Image from 'next/image'
import Link from 'next/link'
import { useWalletAssets } from './hooks/use-wallet-assets'
import { PortfolioViewType } from './portfolio-view'

interface PortfolioAssetsProps {
  walletAddress: string
  viewType: PortfolioViewType
}

export function PortfolioAssets({
  walletAddress,
  viewType,
}: PortfolioAssetsProps) {
  const { assets, loading, error } = useWalletAssets(walletAddress)

  if (loading) {
    return (
      <div className="flex justify-center py-6">
        <LoadCircle />
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-6 text-red-500">
        Error loading assets: {error}
      </div>
    )
  }

  // Filter assets based on view type
  const filteredAssets = assets.filter((asset) => {
    if (viewType === PortfolioViewType.ALL) return true
    if (viewType === PortfolioViewType.TOKENS) return asset.type === 'token'
    if (viewType === PortfolioViewType.NFTS) return asset.type === 'nft'
    return true
  })

  if (filteredAssets.length === 0) {
    return (
      <div className="text-center py-6 text-gray">
        No assets found for this category
      </div>
    )
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredAssets.map((asset) => (
          <div
            key={asset.id}
            className="border rounded-md p-4 flex items-center"
          >
            <div className="w-12 h-12 relative mr-4 overflow-hidden rounded-full">
              {asset.imageUrl ? (
                <Image
                  src={asset.imageUrl}
                  alt={asset.name}
                  width={48}
                  height={48}
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full bg-muted-light flex items-center justify-center">
                  <span>{asset.symbol.substring(0, 2)}</span>
                </div>
              )}
            </div>

            <div className="flex-grow">
              <h3 className="font-semibold">{asset.name}</h3>
              <p className="text-sm text-gray">{asset.symbol}</p>
            </div>

            {asset.type === 'token' && (
              <div className="text-right">
                <p className="font-bold">{asset.amount}</p>
                {asset.value !== undefined && (
                  <p className="text-sm text-gray">${asset.value.toFixed(2)}</p>
                )}
              </div>
            )}

            {asset.type === 'nft' && (
              <Link
                href={`https://solscan.io/token/${asset.id}`}
                passHref
                target="_blank"
                className="text-sm text-blue-500 hover:underline"
              >
                View
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
