export type Person = {
    firstName: String
}

export type Theme = {
    name: String
}

export type GitUser = {
    name?: String,
    username: String
}

export type Payload = {
    type: String
    payload: any
}

export type PersonPayload = Payload & {
    payload: Person
}

export type ThemePayload = Payload & {
    payload: Theme
}

export type GitUserPayload = Payload & {
    payload: GitUser
}