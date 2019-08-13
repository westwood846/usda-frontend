import { SEARCH, SEARCH_FULFILLED, SEARCH_REJECTED } from "./actionTypes";

const initialState = {

}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case SEARCH:
    console.log(type, payload)
    return { ...state, searchQuery: payload, searching: true, searchResult: undefined, searchError: undefined };

  case SEARCH_FULFILLED:
    console.log(type, payload)
    return { ...state, searchResult: payload, searching: false, searchQuery: undefined };
    
    case SEARCH_REJECTED:
      console.log(type, payload)
      return { ...state, searchError: payload, searching: false, searchQuery: undefined };

  default:
    return state
  }
}
