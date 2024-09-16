'use server'

import { createProfile } from '@/lib/tapestry'

export async function createProfileAction(formData: FormData) {
  const username = formData.get('username')?.toString()
  const ownerWalletAddress = formData.get('ownerWalletAddress')?.toString()

  if (!username || !ownerWalletAddress) {
    console.error('Username and owner wallet address are required')
    return
  }

  const data = await createProfile({
    username,
    ownerWalletAddress,
  })

  console.log(data)

  // mutate data
  // revalidate cache
}
