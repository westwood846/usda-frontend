import { SEARCH, SEARCH_FULFILLED, SEARCH_REJECTED, GET_REPORT, GET_REPORT_FULFILLED, GET_REPORT_REJECTED } from './actionTypes';

export const search = (query) => ({type: SEARCH, payload: query });
export const searchFulfilled = (result) => ({type: SEARCH_FULFILLED, payload: result });
export const searchRejected = (result) => ({type: SEARCH_REJECTED, payload: result });
export const getReport = (ndbno) => ({type: GET_REPORT, payload: ndbno });
export const getReportFulfilled = (result) => ({type: GET_REPORT_FULFILLED, payload: result });
export const getReportRejected = (result) => ({type: GET_REPORT_REJECTED, payload: result });