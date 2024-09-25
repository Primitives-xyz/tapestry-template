'use client'

import { useProfiles } from '@/components/auth/hooks/useFindProfiles'
import {
  useUnifiedWallet,
  useUnifiedWalletContext,
} from '@jup-ag/wallet-adapter'

export function useCurrentWallet() {
  const { publicKey, disconnect, wallet, signMessage } = useUnifiedWallet()

  const { setShowModal } = useUnifiedWalletContext()

  const walletAddress = publicKey?.toBase58() || null

  const { profiles, loading } = useProfiles(walletAddress || '')

  function openWalletConnectModal() {
    setShowModal(true)
  }

  return {
    walletIsConnected: !!walletAddress,
    wallet,
    publicKey,
    walletName: wallet?.adapter.name,
    walletIcon: wallet?.adapter.icon,
    walletAddress,
    mainUsername: profiles?.[0]?.profile?.properties?.username,
    loadingMainUsername: loading,
    openWalletConnectModal,
    signMessage,
    walletDisconnect: disconnect,
  }
}
