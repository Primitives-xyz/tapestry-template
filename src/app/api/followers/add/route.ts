import { socialfi } from '@/utils/socialfi'
import { NextRequest, NextResponse } from 'next/server'

interface FollowRequestBody {
  followerUser: { username: string }
  followeeUser: { username: string }
}

export async function POST(req: NextRequest) {
  try {
    const { followerUser, followeeUser }: FollowRequestBody = await req.json()

    if (!followerUser || !followeeUser) {
      return NextResponse.json(
        { error: 'followerUser and followeeUser are required' },
        { status: 400 },
      )
    }

    const response = await socialfi.followers.postFollowers(
      {
        apiKey: process.env.TAPESTRY_API_KEY || '',
      },
      {
        startId: followerUser.username,
        endId: followeeUser.username,
      },
    )

    return NextResponse.json(response)
  } catch (error: any) {
    console.error('Error processing follow request:', error)
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 },
    )
  }
}
