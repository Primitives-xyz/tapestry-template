import { IFollower } from '@/models/followers.models'
import { IProfileResponse } from '@/models/profile.models'
import { FetchMethod, fetchTapestry } from '@/utils/api'

export const createProfile = async ({
  username,
  ownerWalletAddress,
}: {
  username: string
  ownerWalletAddress: string
}) => {
  return await fetchTapestry({
    endpoint: 'profile/findOrCreate',
    method: FetchMethod.POST,
    data: {
      walletAddress: ownerWalletAddress,
      username,
      blockchain: 'Solana',
    },
  })
}

// export const getAllProfiles = async () => {
//   return await fetchTapestry<IProfileResponse[]>({
//     endpoint: 'profile/all',
//   })
// }

export const getProfileInfo = async ({ username }: { username: string }) => {
  return await fetchTapestry<IProfileResponse>({
    endpoint: `profile/${username}`,
  })
}

export const getFollowers = async ({ username }: { username: string }) => {
  const response = await fetchTapestry<IFollower[]>({
    endpoint: `profile/followers/${username}`,
  })

  return response.map((entry) => entry._fields[0].properties.username)
}

export const getFollowing = async ({ username }: { username: string }) => {
  const response = await fetchTapestry<IFollower[]>({
    endpoint: `profile/following/${username}`,
  })

  return response.map((entry) => entry._fields[0].properties.username)
}
