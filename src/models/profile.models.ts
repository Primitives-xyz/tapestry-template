export interface IProfileResponse {
  [x: string]: any
  profile: IProfile[]
  socialCounts: ISocialCounts
}

export interface IProfile {
  id: number
  label: string
  properties: IProperty
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
}

export interface IProperty {
  username?: string
}

export interface ISocialCounts {
  followers: number
  following: number
}
