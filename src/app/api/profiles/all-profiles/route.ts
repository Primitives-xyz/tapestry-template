import { socialfi } from '@/utils/socialfi'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const response = await socialfi.profiles.profilesList({
      apiKey: process.env.TAPESTRY_API_KEY || '',
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
