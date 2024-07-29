export interface IFollower {
  keys: string[]
  length: number
  _fields: Field[]
  _fieldLookup: FieldLookup
}

export interface Field {
  identity: Identity
  labels: string[]
  properties: Properties
  elementId: string
}

export interface Identity {
  low: number
  high: number
}

export interface Properties {
  namespace: string
  id: string
  username: string
  crypto: string
}

export interface FieldLookup {
  followers: number
}
