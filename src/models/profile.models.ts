export interface IProfileResponse {
  [x: string]: any
  walletAddress?: string | undefined
  socialCounts: ISocialCounts
}

export interface IProfile {
  id: number
  label: string
  entityType: string
  graphAddress: string
  fromGraphAddress: string
  toGraphAddress: string
  socialEntityType: string
  socialEntityAction: string
  createdAt: string
  updatedAt: string
  team_id: number
  crypto: string
  username: string
  namespace?: string
}

export interface ISocialCounts {
  followers: number
  following: number
}
