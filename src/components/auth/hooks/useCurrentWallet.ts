'use client'

import {
  useUnifiedWallet,
  useUnifiedWalletContext,
} from '@jup-ag/wallet-adapter'

export function useCurrentWallet() {
  const { publicKey, disconnect, wallet, signMessage } = useUnifiedWallet()
  const { setShowModal } = useUnifiedWalletContext()

  const walletAddress = publicKey?.toBase58() || null

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
    openWalletConnectModal,
    signMessage,
    walletDisconnect: disconnect,
  }
}
