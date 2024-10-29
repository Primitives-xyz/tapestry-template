import { AppWalletProvider } from '@/components/auth/unified-wallet-provider'
import { Header } from '@/components/common/header'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tapestry protocol Boilerplate',
  description: 'Create your first Tapestry protocol app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppWalletProvider>
          <div className="p-12 max-w-3xl mx-auto">
            <Header />
            {children}
          </div>
        </AppWalletProvider>
      </body>
    </html>
  )
}
