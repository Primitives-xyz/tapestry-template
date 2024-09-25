import { FetchMethod, fetchTapestry } from '@/utils/api'
import { NextRequest, NextResponse } from 'next/server'

interface FollowRequestBody {
  followerUser: { username: string }
  followeeUser: { username: string }
}

export async function POST(req: NextRequest) {
  try {
    // Récupération des données du corps de la requête
    const { followerUser, followeeUser }: FollowRequestBody = await req.json()

    // Validation des paramètres
    if (!followerUser || !followeeUser) {
      return NextResponse.json(
        { error: 'followerUser and followeeUser are required' },
        { status: 400 },
      )
    }

    // Construction de la requête pour fetchTapestry
    const bodyData = {
      shouldWriteOnChain: true,
      blockchain: 'Solana',
      startId: followerUser.username, // moi (utilisateur qui suit)
      endId: followeeUser.username, // celui que je veux suivre
      properties: [],
    }

    // Appel à l'API Tapestry via fetchTapestry
    const response = await fetchTapestry({
      endpoint: 'followers/add',
      method: FetchMethod.POST,
      data: bodyData,
    })

    // Gestion de la réponse de fetchTapestry
    if (response.error) {
      return NextResponse.json(
        { error: response.error || 'Failed to follow user' },
        { status: 500 },
      )
    }

    return NextResponse.json(response)
  } catch (error: any) {
    console.error('Error processing follow request:', error)
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 },
    )
  }
}
