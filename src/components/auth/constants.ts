import { BaseWalletAdapter } from '@jup-ag/wallet-adapter'

export type WalletAdapterWithMutableSupportedTransactionVersions<T> = Omit<
  T,
  'supportedTransactionVersions'
> & {
  supportedTransactionVersions: BaseWalletAdapter['supportedTransactionVersions']
}

export const metadata = {
  name: 'tapestry-template',
  title: 'Tapestry protocol template',
  description: 'Create your first Tapestry protocol app',
  url: 'https://tapestry-template.vercel.app/',
  iconUrls: ['https://tapestry-template.vercel.app/favicon.ico'],
  additionalInfo: '',
  walletConnectProjectId: '',
}
