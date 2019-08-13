import { SEARCH, SEARCH_FULFILLED, SEARCH_REJECTED } from './actionTypes';

export const search = (query) => ({type: SEARCH, payload: query });
export const searchFulfilled = (result) => ({type: SEARCH_FULFILLED, payload: result });
export const searchRejected = (result) => ({type: SEARCH_REJECTED, payload: result });