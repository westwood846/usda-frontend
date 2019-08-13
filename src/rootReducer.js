import { SEARCH, SEARCH_FULFILLED, SEARCH_REJECTED } from "./actionTypes";

const initialState = {

}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case SEARCH:
    console.log(type, payload);
    return { ...state };

  case SEARCH_FULFILLED:
    console.log(type, payload);
    return { ...state };

  case SEARCH_REJECTED:
    console.log(type, payload);
    return { ...state };

  default:
    return state
  }
}
