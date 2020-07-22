export type Person = {
    firstName: String
}

export type Payload = {
    type: String
    payload: any
}

export type PersonPayload = Payload & {
    payload: Person
}