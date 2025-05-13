'use client'

import { Card } from '@/components/common/card'
import { LoadCircle } from '@/components/common/load-circle'
import { useGetProfileInfo } from '@/components/profile/hooks/use-get-profile-info'
import { useState } from 'react'
import { PortfolioAssets } from './portfolio-assets'
import { PortfolioSummary } from './portfolio-summary'
import { PortfolioTabs } from './portfolio-tabs'

interface Props {
  username: string
}

export enum PortfolioViewType {
  ALL = 'all',
  TOKENS = 'tokens',
  NFTS = 'nfts',
}

export function PortfolioView({ username }: Props) {
  const { data } = useGetProfileInfo({ username })
  const [activeTab, setActiveTab] = useState<PortfolioViewType>(
    PortfolioViewType.ALL,
  )

  if (!data?.walletAddress) {
    return (
      <Card className="min-h-[200px] flex items-center justify-center">
        <LoadCircle />
      </Card>
    )
  }

  return (
    <Card>
      <div className="space-y-4">
        <h2 className="text-lg font-bold">Portfolio</h2>

        <PortfolioSummary walletAddress={data.walletAddress} />

        <PortfolioTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        <PortfolioAssets
          walletAddress={data.walletAddress}
          viewType={activeTab}
        />
      </div>
    </Card>
  )
}
