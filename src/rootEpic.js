import { ofType, combineEpics } from "redux-observable";
import { of } from "rxjs";
import { ajax } from "rxjs/ajax";
import {
  mergeMap,
  map,
  catchError,
  debounceTime,
  filter,
  tap,
} from "rxjs/operators";

import {
  searchFulfilled,
  searchRejected,
  getReportRejected,
  getReportFulfilled,
} from "./actions";
import {
  SEARCH,
  SEARCH_REJECTED,
  GET_REPORT,
  GET_REPORT_REJECTED,
} from "./actionTypes";

import { encodeDataSource } from "./usda";

const USDA_API_KEY = "FYTSTF75mesLeO85VFSKvqgWEzdL0hQAYCZUtjJk";

const searchEpic = (action$, state$) =>
  action$.pipe(
    ofType(SEARCH),
    debounceTime(500),
    filter((action) => action.payload.query !== ""),
    tap(console.log(state$.value)),
    mergeMap((action) =>
      ajax
        .getJSON(
          `https://api.nal.usda.gov/ndb/search?api_key=${USDA_API_KEY}&q=${encodeURIComponent(
            action.payload.query
          )}&ds=${encodeDataSource(action.payload.dataSource)}`
        )
        .pipe(
          map((response) =>
            response.errors
              ? searchRejected(response)
              : searchFulfilled(response)
          ),
          catchError((error) =>
            of({
              type: SEARCH_REJECTED,
              payload: error.xhr.response,
              error: true,
            })
          )
        )
    )
  );

const getReportEpic = (action$) =>
  action$.pipe(
    ofType(GET_REPORT),
    debounceTime(500),
    mergeMap((action) =>
      ajax
        .getJSON(
          `https://api.nal.usda.gov/ndb/V2/reports?api_key=${USDA_API_KEY}&ndbno=${encodeURIComponent(
            action.payload
          )}`
        )
        .pipe(
          map((response) =>
            response.foods[0].error
              ? getReportRejected(response)
              : getReportFulfilled(response.foods[0].food)
          ),
          catchError((error) =>
            of({
              type: GET_REPORT_REJECTED,
              payload: error.xhr.response,
              error: true,
            })
          )
        )
    )
  );

const rootEpic = combineEpics(searchEpic, getReportEpic);
export default rootEpic;
