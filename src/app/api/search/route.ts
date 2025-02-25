import { socialfi } from '@/utils/socialfi'
import { NextRequest, NextResponse } from 'next/server'

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
    const response = await socialfi.search.profilesList({
      query,
      includeExternalProfiles: 'false',
      page: '1',
      pageSize: '50',
    })

    return NextResponse.json(response)
  } catch (error: any) {
    console.error('Error searching profiles:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to search profiles' },
      { status: 500 },
    )
  }
}
