// app/api/profiles/findAllProfiles/route.ts

import { IGetSocialResponse } from '@/models/profile.models'
import { FetchMethod, fetchTapestry } from '@/utils/api'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const walletAddress = searchParams.get('walletAddress')

  if (!walletAddress) {
    return NextResponse.json(
      { error: 'walletAddress is required' },
      { status: 400 },
    )
  }

  try {
    // const response = await socialfi.api.profiles.profilesList({
    //   walletAddress: walletAddress,
    //   page: '0',
    //   pageSize: '10',
    // })

    const response = await fetchTapestry<IGetSocialResponse>({
      endpoint: 'profiles',
      method: FetchMethod.GET,
      data: {
        walletAddress,
      },
    })

    return NextResponse.json(response)
  } catch (error: any) {
    console.error('Error fetching profiles:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to fetch profiles' },
      { status: 500 },
    )
  }
}
