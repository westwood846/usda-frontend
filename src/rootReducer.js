import { SOME_ACTION } from "./actionTypes";

const initialState = {

}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case SOME_ACTION:
    return { ...state, ...payload }

  default:
    return state
  }
}
