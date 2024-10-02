export interface IFollower {
  username: string
}

export interface Field {
  identity: Identity
  labels: string[]
  elementId: string
}

export interface Identity {
  low: number
  high: number
}

export interface FieldLookup {
  followers: number
}
