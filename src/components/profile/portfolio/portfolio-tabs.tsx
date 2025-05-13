'use client'

import { Button } from '@/components/common/button'
import { PortfolioViewType } from './portfolio-view'

interface PortfolioTabsProps {
  activeTab: PortfolioViewType
  setActiveTab: (tab: PortfolioViewType) => void
}

export function PortfolioTabs({ activeTab, setActiveTab }: PortfolioTabsProps) {
  return (
    <div className="flex space-x-2 border-b border-gray-200 pb-2">
      <Button
        variant={activeTab === PortfolioViewType.ALL ? 'default' : 'secondary'}
        onClick={() => setActiveTab(PortfolioViewType.ALL)}
        className="text-sm"
      >
        All Assets
      </Button>
      <Button
        variant={
          activeTab === PortfolioViewType.TOKENS ? 'default' : 'secondary'
        }
        onClick={() => setActiveTab(PortfolioViewType.TOKENS)}
        className="text-sm"
      >
        Tokens
      </Button>
      <Button
        variant={activeTab === PortfolioViewType.NFTS ? 'default' : 'secondary'}
        onClick={() => setActiveTab(PortfolioViewType.NFTS)}
        className="text-sm"
      >
        NFTs
      </Button>
    </div>
  )
}
