'use client'

import { useGetProfiles } from '@/components/auth/hooks/use-get-profiles'
import {
  useUnifiedWallet,
  useUnifiedWalletContext,
} from '@jup-ag/wallet-adapter'

export function useCurrentWallet() {
  const { publicKey, disconnect, wallet, signMessage } = useUnifiedWallet()

  const { setShowModal } = useUnifiedWalletContext()

  const walletAddress = publicKey?.toBase58() || null

  const { profiles, loading } = useGetProfiles(walletAddress || '')

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
    mainUsername: profiles?.[0]?.profile?.username,
    loadingMainUsername: loading,
    openWalletConnectModal,
    signMessage,
    walletDisconnect: disconnect,
  }
}
