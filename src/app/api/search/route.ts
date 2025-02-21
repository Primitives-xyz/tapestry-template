import { FetchMethod, fetchTapestry } from '@/utils/api'
import { NextRequest, NextResponse } from 'next/server'
import { SearchProfilesResponseSchema } from 'socialfi'

export async function POST(req: NextRequest) {
  const formData = await req.formData()
  const query = formData.get('query')?.toString()

  if (!query) {
    return NextResponse.json({ error: 'A query is required' }, { status: 400 })
  }

  if (!process.env.TAPESTRY_API_KEY) {
    return NextResponse.json({ error: 'Missing API key' }, { status: 500 })
  }

  try {
    const response = await fetchTapestry<SearchProfilesResponseSchema>({
      endpoint: 'search/profiles',
      method: FetchMethod.GET,
      data: {
        query,
        includeExternalProfiles: false,
        page: '1',
        pageSize: '50',
      },
    })

    console.log('SEARCH PROFILES RESPONSE')
    console.log(response)

    return NextResponse.json(response)
  } catch (error: any) {
    console.error('Error searching profiles:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to search profiles' },
      { status: 500 },
    )
  }
}
