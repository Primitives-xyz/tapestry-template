'use client'

import { useMemo } from 'react'

import {
  metadata,
  WalletAdapterWithMutableSupportedTransactionVersions,
} from '@/components/auth/constants'
import { UnifiedWalletProvider } from '@jup-ag/wallet-adapter'
import {
  Adapter,
  BaseSignerWalletAdapter,
  WalletAdapterNetwork,
} from '@solana/wallet-adapter-base'
import {
  PhantomWalletAdapter,
  WalletConnectWalletAdapter,
} from '@solana/wallet-adapter-wallets'
import {
  initialize as initializeSolflareAndMetamaskSnap,
  SolflareWalletAdapter,
} from '@solflare-wallet/wallet-adapter'

initializeSolflareAndMetamaskSnap()

export const AppWalletProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const wallets: Adapter[] = useMemo(() => {
    const walletConnectWalletAdapter: WalletAdapterWithMutableSupportedTransactionVersions<BaseSignerWalletAdapter> | null =
      (() => {
        const adapter: WalletAdapterWithMutableSupportedTransactionVersions<BaseSignerWalletAdapter> =
          new WalletConnectWalletAdapter({
            network: WalletAdapterNetwork.Mainnet,
            options: {
              relayUrl: 'wss://relay.walletconnect.com',
              projectId: metadata.walletConnectProjectId,
              metadata: {
                name: metadata.name,
                description: metadata.description,
                url: metadata.url,
                icons: metadata.iconUrls,
              },
            },
          })

        // While sometimes supported, it mostly isn't. Should this be dynamic in the wallet-adapter instead?
        //@ts-ignore
        adapter.supportedTransactionVersions = new Set(['legacy'])

        return adapter
      })()

    return [
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter(),

      walletConnectWalletAdapter,
    ].filter((item) => item && item.name && item.icon) as Adapter[]
  }, [])

  // function onConnect(notification: any) {
  //   console.log('Connecté avec succès : ', notification)
  // }

  // function onDisconnect(notification: any) {
  //   console.log('Déconnecté : ', notification)
  // }

  // function onConnecting(notification: any) {
  //   console.log('Connexion en cours : ', notification)
  // }

  // function onNotInstalled(notification: any) {
  //   console.log('Portefeuille non installé : ', notification)
  // }

  const params: Omit<Parameters<typeof UnifiedWalletProvider>[0], 'children'> =
    useMemo(
      () => ({
        wallets: wallets,
        config: {
          autoConnect: false,
          env: 'mainnet-beta',
          metadata,
          // notificationCallback: {
          //   onConnect,
          //   onDisconnect,
          //   onConnecting,
          //   onNotInstalled,
          // },
          walletlistExplanation: {
            href: 'https://station.jup.ag/docs/additional-topics/wallet-list',
          },
          theme: 'dark',
          lang: 'en',
          provider: 'solana-wallet-adapter', // || walletconnect
        },
      }),
      [wallets],
    )

  return (
    <div tw="flex flex-col items-start">
      <UnifiedWalletProvider {...params}>{children}</UnifiedWalletProvider>
    </div>
  )
}
