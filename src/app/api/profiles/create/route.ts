import { NextRequest, NextResponse } from 'next/server'
import { SocialFi } from 'socialfi'

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
    const socialfi = new SocialFi({})

    const profile = await socialfi.profiles.findOrCreateCreate(
      {
        apiKey: process.env.TAPESTRY_API_KEY || '',
      },
      {
        walletAddress: ownerWalletAddress,
        username,
        blockchain: 'SOLANA',
      },
    )

    console.log('[FindOrCreate] Profile created', JSON.stringify(profile))

    return NextResponse.json(profile)
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Failed to create profile' },
      { status: 500 },
    )
  }
}

export const dynamic = 'force-dynamic'
