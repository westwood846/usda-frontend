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
  COMPARE_UPSERT,
  COMPARE_REMOVE,
  COMPARE_SET,
  COMPARE_CLEAR,
} from "./actionTypes";

export const setQuery = (query) => ({ type: SET_QUERY, payload: query });
export const setDataSource = (dataSource) => ({
  type: SET_DATA_SOURCE,
  payload: dataSource,
});
export const search = (query, dataSource) => ({
  type: SEARCH,
  payload: { query, dataSource },
});
export const searchFulfilled = (result) => ({
  type: SEARCH_FULFILLED,
  payload: result,
});
export const searchRejected = (result) => ({
  type: SEARCH_REJECTED,
  payload: result,
});
export const getReport = (ndbno) => ({ type: GET_REPORT, payload: ndbno });
export const getReportFulfilled = (result) => ({
  type: GET_REPORT_FULFILLED,
  payload: result,
});
export const getReportRejected = (result) => ({
  type: GET_REPORT_REJECTED,
  payload: result,
});
export const setMass = (mass) => ({ type: SET_MASS, payload: mass });
export const compareSet = (compare) => ({
  type: COMPARE_SET,
  payload: compare,
});
export const compareInsert = (ndbno, amount, fallbackName) => ({
  type: COMPARE_UPSERT,
  payload: { ndbno, amount, fallbackName },
});
export const compareUpdate = compareInsert;
export const compareRemove = (ndbno) => ({
  type: COMPARE_REMOVE,
  payload: ndbno,
});
export const compareClear = () => ({
  type: COMPARE_CLEAR,
});
