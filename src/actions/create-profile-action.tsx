'use server'

import { createProfile } from '@/lib/tapestry'

export async function createProfileAction(formData: FormData) {
  const username = formData.get('username')?.toString()

  if (!username) {
    return
  }

  const data = await createProfile({
    username,
    ownerWalletAddress: 'qweqweqwqwe',
  })

  console.log(data)

  // mutate data
  // revalidate cache
}
