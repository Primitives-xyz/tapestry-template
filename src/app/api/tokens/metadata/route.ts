import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { mintAccounts } = await req.json()

    if (
      !mintAccounts ||
      !Array.isArray(mintAccounts) ||
      mintAccounts.length === 0
    ) {
      return NextResponse.json(
        { error: 'mintAccounts array is required' },
        { status: 400 },
      )
    }

    // Helius has a limit on how many mint addresses can be included in a single request
    // We'll process them in batches of 100
    const batchSize = 100
    const batches = []

    for (let i = 0; i < mintAccounts.length; i += batchSize) {
      batches.push(mintAccounts.slice(i, i + batchSize))
    }

    const endpoint =
      process.env.HELIUS_RPC_URL ||
      'https://mainnet.helius-rpc.com/?api-key=' + process.env.HELIUS_API_KEY
    const results = []

    // Process each batch
    for (const batch of batches) {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          jsonrpc: '2.0',
          id: 'metadata-query',
          method: 'getAssetBatch',
          params: {
            ids: batch,
          },
        }),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()

      if (data.error) {
        throw new Error(`RPC error: ${data.error.message}`)
      }

      results.push(...data.result)
    }

    return NextResponse.json(results)
  } catch (error) {
    console.error('Error fetching token metadata:', error)
    return NextResponse.json(
      { error: 'Failed to fetch token metadata' },
      { status: 500 },
    )
  }
}
