import { SEARCH, SEARCH_FULFILLED, SEARCH_REJECTED, GET_REPORT, GET_REPORT_FULFILLED, GET_REPORT_REJECTED } from "./actionTypes";
import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

const initialState = {

}

const appReducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case SEARCH:
    console.log(type, payload)
    if (payload === '') {
      return { ...state, searchQuery: payload, searching: false, searchResult: undefined, searchError: undefined };
    } else {
      return { ...state, searchQuery: payload, searching: true, searchResult: undefined, searchError: undefined };
    }

  case SEARCH_FULFILLED:
    console.log(type, payload)
    return { ...state, searchResult: payload, searching: false };
    
  case SEARCH_REJECTED:
    console.log(type, payload)
    return { ...state, searchError: payload, searching: false };

  case GET_REPORT:
    console.log(type, payload)
    return { ...state, getReportNDBNO: payload, gettingReport: true, getReportResult: undefined, getReportError: undefined };

  case GET_REPORT_FULFILLED:
    console.log(type, payload)
    return { ...state, getReportResult: payload, gettingReport: false, getReportNDBNO: undefined };
    
  case GET_REPORT_REJECTED:
    console.log(type, payload)
    return { ...state, getReportError: payload, gettingReport: false, getReportNDBNO: undefined };

  default:
    return state
  }
}

export default (history) => combineReducers({
  router: connectRouter(history),
  app: appReducer
});