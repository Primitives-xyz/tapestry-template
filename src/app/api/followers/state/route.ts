import { socialfi } from '@/utils/socialfi'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const startId = searchParams.get('startId')
  const endId = searchParams.get('endId')

  if (!startId || !endId) {
    return NextResponse.json(
      { error: 'startId and endId are required' },
      { status: 400 },
    )
  }

  try {
    const response = await socialfi.followers.stateList({
      apiKey: process.env.TAPESTRY_API_KEY || '',
      startId,
      endId,
    })

    return NextResponse.json(response)
  } catch (error: any) {
    console.error('Error verifying follow state:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to verify follow state' },
      { status: 500 },
    )
  }
}
