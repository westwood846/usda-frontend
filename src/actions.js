import { SEARCH, SEARCH_FULFILLED, SEARCH_REJECTED, GET_REPORT, GET_REPORT_FULFILLED, GET_REPORT_REJECTED, SET_QUERY, SET_DATA_SOURCE } from './actionTypes';

export const setQuery = (query) => ({type: SET_QUERY, payload: query });
export const setDataSource = (dataSource) => ({type: SET_DATA_SOURCE, payload: dataSource });
export const search = () => ({type: SEARCH });
export const searchFulfilled = (result) => ({type: SEARCH_FULFILLED, payload: result });
export const searchRejected = (result) => ({type: SEARCH_REJECTED, payload: result });
export const getReport = (ndbno) => ({type: GET_REPORT, payload: ndbno });
export const getReportFulfilled = (result) => ({type: GET_REPORT_FULFILLED, payload: result });
export const getReportRejected = (result) => ({type: GET_REPORT_REJECTED, payload: result });