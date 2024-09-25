import { IProfileResponse } from '@/models/profile.models'
import { FetchMethod, fetchTapestry } from '@/utils/api'

export const createProfile = async ({
  username,
  ownerWalletAddress,
}: {
  username: string
  ownerWalletAddress: string
}) => {
  const createProfileResponse = await fetchTapestry({
    endpoint: 'profiles/findOrCreate',
    method: FetchMethod.POST,
    data: {
      walletAddress: ownerWalletAddress,
      username,
      blockchain: 'Solana',
    },
  })

  console.log(createProfileResponse)

  return createProfileResponse
}

export const getSuggestedProfiles = async ({
  ownerWalletAddress,
}: {
  ownerWalletAddress: string
}) => {
  const response = await fetchTapestry<any>({
    endpoint: `profiles/suggestedProfiles/${ownerWalletAddress}`,
  })

  return response
}

export const getProfileInfo = async ({ username }: { username: string }) => {
  return await fetchTapestry<IProfileResponse>({
    endpoint: `profiles/${username}`,
  })
}

export const getProfilesList = async ({}: {}) => {
  return await fetchTapestry<any>({
    endpoint: `profiles/all`,
  })
}

export const getFollowers = async ({ username }: { username: string }) => {
  const response = await fetchTapestry({
    endpoint: `profiles/followers/${username}`,
  })

  return response
}

export const getFollowing = async ({ username }: { username: string }) => {
  const response = await fetchTapestry({
    endpoint: `profiles/following/${username}`,
  })

  return response
}
