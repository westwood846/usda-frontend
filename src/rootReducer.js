import { SEARCH, SEARCH_FULFILLED, SEARCH_REJECTED, GET_REPORT, GET_REPORT_FULFILLED, GET_REPORT_REJECTED, SET_QUERY, SET_DATA_SOURCE } from "./actionTypes";
import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

const initialState = {
  searching: false,
  searchQuery: '',
  searchDataSource: 'BOTH'
}

const appReducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case SET_QUERY:
    console.log(type, payload)
    return { ...state, searchQuery: payload };

  case SET_DATA_SOURCE:
    console.log(type, payload)
    return { ...state, searchDataSource: payload };

  case SEARCH:
    console.log(type, payload)
    // if (!payload) payload = {};
    // payload.query = state.searchQuery;
    // payload.dataSource = state.searchDataSource;
    return { ...state, searching: true, searchResult: undefined, searchError: undefined };

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