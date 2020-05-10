import {
  SEARCH,
  SEARCH_FULFILLED,
  SEARCH_REJECTED,
  GET_REPORT,
  GET_REPORT_FULFILLED,
  GET_REPORT_REJECTED,
  SET_QUERY,
  SET_DATA_SOURCE,
  SET_MASS,
  COMPARE_SET,
  COMPARE_UPSERT,
  COMPARE_REMOVE,
  COMPARE_CLEAR,
} from "./actionTypes";
import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { uniqBy } from "lodash";

const initialState = {
  searching: false,
  searchQuery: "",
  searchDataSource: "STANDARD_REFERENCE",
  mass: 100,
  reports: {},
  compare: [],
};

const appReducer = (state = initialState, { type, payload }) => {
  console.log(type, payload);
  switch (type) {
    case SET_QUERY:
      return {
        ...state,
        searchQuery: payload,
        searchResult: undefined,
        searchError: undefined,
      };

    case SET_DATA_SOURCE:
      return {
        ...state,
        searchDataSource: payload,
        searchResult: undefined,
        searchError: undefined,
      };

    case SEARCH:
      if (state.searchQuery === "") {
        return {
          ...state,
          searching: false,
          searchResult: undefined,
          searchError: undefined,
        };
      } else {
        return {
          ...state,
          searching: true,
          searchResult: undefined,
          searchError: undefined,
        };
      }

    case SEARCH_FULFILLED:
      return { ...state, searchResult: payload, searching: false };

    case SEARCH_REJECTED:
      return { ...state, searchError: payload, searching: false };

    case GET_REPORT:
      return {
        ...state,
        getReportNDBNO: payload,
        gettingReport: true,
        getReportResult: undefined,
        getReportError: undefined,
      };

    case GET_REPORT_FULFILLED:
      return {
        ...state,
        getReportResult: payload,
        gettingReport: false,
        getReportNDBNO: undefined,
        reports: { ...state.reports, [payload.desc.ndbno]: payload },
      };

    case GET_REPORT_REJECTED:
      return {
        ...state,
        getReportError: payload,
        gettingReport: false,
        getReportNDBNO: undefined,
      };

    case SET_MASS:
      return { ...state, mass: payload };

    case COMPARE_SET:
      return { ...state, compare: payload };

    case COMPARE_UPSERT:
      return {
        ...state,
        compare: uniqBy([payload, ...state.compare], "ndbno"),
      };

    case COMPARE_REMOVE:
      return {
        ...state,
        compare: state.compare.filter((item) => item.ndbno !== payload),
      };
    case COMPARE_CLEAR:
      return {
        ...state,
        compare: initialState.compare,
      };

    default:
      return state;
  }
};

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    app: appReducer,
  });
