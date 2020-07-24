import { GitUserPayload, GitUser } from "../../types"

// Actions
export const SET_USER: string = "SET_USER"
export const FETCH_USER: string = "FETCH_USER"

export const setUser = (user: GitUser) => ({
    type: SET_USER,
    payload: { user }
})

export const fetchUser = (username: string) => ({
    type: FETCH_USER,
    payload: { username }
})

const defaultState = {
    name: "",
    username: ""
}

// Reducer
export default function person(state: GitUser = defaultState, { type, payload }: GitUserPayload) {
    switch (type) {
        case SET_USER:
            return { ...state, ...payload.user }
        default:
            return state
    }
}
