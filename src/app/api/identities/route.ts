// app/api/profiles/findAllProfiles/route.ts

import { FetchMethod, fetchTapestry } from '@/utils/api'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const walletAddress = searchParams.get('walletAddress')

  try {
    const data = await fetchTapestry({
      endpoint: `identities/${walletAddress}/profiles`,
      method: FetchMethod.GET,
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
