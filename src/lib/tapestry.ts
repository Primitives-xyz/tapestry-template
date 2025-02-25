import { socialfi } from '@/utils/socialfi'

export const getFollowers = async ({ username }: { username: string }) => {
  try {
    return await socialfi.profiles.followersDetail({
      id: username,
    })
  } catch (error: any) {
    throw new Error(error.message || 'Failed get followers list')
  }
}

export const getFollowing = async ({ username }: { username: string }) => {
  try {
    return await socialfi.profiles.followingDetail({
      id: username,
    })
  } catch (error: any) {
    throw new Error(error.message || 'Failed get following list')
  }
}
