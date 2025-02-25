// app/api/profiles/suggestedProfiles/route.ts
import { socialfi } from '@/utils/socialfi'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const walletAddress = searchParams.get('walletAddress')

  if (!walletAddress) {
    return NextResponse.json(
      { error: 'Owner wallet address is required' },
      { status: 400 },
    )
  }

  try {
    const response = await socialfi.profiles.suggestedDetail({
      identifier: walletAddress,
    })

    return NextResponse.json(response)
  } catch (error: any) {
    console.error('Error fetching suggested profiles:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to fetch suggested profiles' },
      { status: 500 },
    )
  }
}
