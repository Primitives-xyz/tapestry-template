import { socialfi } from '@/utils/socialfi'

export const getFollowers = async ({ username }: { username: string }) => {
  try {
    const response = await socialfi.profiles.followersDetail({
      id: username,
      apiKey: process.env.TAPESTRY_API_KEY || '',
    })
    return response
  } catch (error: any) {
    throw new Error(error.message || 'Failed get followers list')
  }
}

export const getFollowing = async ({ username }: { username: string }) => {
  try {
    const response = await socialfi.profiles.followingDetail({
      id: username,
      apiKey: process.env.TAPESTRY_API_KEY || '',
    })
    return response
  } catch (error: any) {
    throw new Error(error.message || 'Failed get following list')
  }
}
