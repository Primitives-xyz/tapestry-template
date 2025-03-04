// app/api/profiles/findAllProfiles/route.ts

import { socialfi } from '@/utils/socialfi'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const walletAddress = searchParams.get('walletAddress')

  try {
    const data = await socialfi.identities.identitiesDetail({
      id: walletAddress || '',
      apiKey: process.env.TAPESTRY_API_KEY || '',
    })

    return NextResponse.json(data)
  } catch (error: any) {
    console.error('Error fetching profiles:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to fetch profiles' },
      { status: 500 },
    )
  }
}
