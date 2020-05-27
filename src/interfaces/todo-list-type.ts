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

export interface AddTodoDone {
  userId: string
  newContext: NewContentType
}

export interface NewContentType {
  title: string
  contents: string
  date: string
  state: number
  importance: string
}

export interface DeleteTodoDone {
  userId: string
  listType: string
  index: number
}

export interface UpdateTodoDone {
  userId: string
  listType: string
  index: number
  key: string
  value: string
}
