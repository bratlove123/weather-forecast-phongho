import produce from 'immer'
import { SET_LOADING, GET_LOGIN_SUCCESS } from './homePage.action'

// Define your state here
const initialState = {
  isLoading: false,
  users: [{ name: 'acb' }, { name: 'def' }, { name: 'ghi' }]
}

export default (
  state = initialState,
  { type, payload }: { type: string; payload: any }
) => {
  switch (type) {
    case SET_LOADING:
      return produce(initialState, (draftState) => {
        draftState.isLoading = true
      })
    case GET_LOGIN_SUCCESS:
      return produce(initialState, (draftState) => {
        draftState.users = payload
        draftState.isLoading = false
      })

    default:
      return state
  }
}
