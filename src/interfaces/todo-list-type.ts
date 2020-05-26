export interface Query {
  userData: string
}

export interface UserData {
  id: number
  googleId: string
  email: string
  name: string
}

export interface TodoUser {
  userId: string
  listType: string
}
