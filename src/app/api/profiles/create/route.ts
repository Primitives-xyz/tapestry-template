import { FetchMethod, fetchTapestry } from '@/utils/api'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const formData = await req.formData()
  const username = formData.get('username')?.toString()
  const ownerWalletAddress = formData.get('ownerWalletAddress')?.toString()

  if (!username || !ownerWalletAddress) {
    return NextResponse.json(
      { error: 'Username and owner wallet address are required' },
      { status: 400 },
    )
  }

  try {
    // const profile = await socialfi.profiles.findOrCreateCreate(
    //   {},
    //   {
    //     walletAddress: ownerWalletAddress,
    //     username,
    //     blockchain: 'SOLANA',
    //   },
    // )

    const profile = await fetchTapestry({
      endpoint: 'profiles/findOrCreate',
      method: FetchMethod.POST,
      data: {
        walletAddress: ownerWalletAddress,
        username,
        blockchain: 'SOLANA',
      },
    })

    return NextResponse.json(profile)
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Failed to create profile' },
      { status: 500 },
    )
  }
}

export const dynamic = 'force-dynamic'
