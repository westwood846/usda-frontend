import { ajax } from 'rxjs/ajax';
import { mergeMap, map, catchError, debounceTime } from 'rxjs/operators';
import { ofType, combineEpics } from 'redux-observable';
import { SEARCH, SEARCH_REJECTED } from './actionTypes';
import { searchFulfilled } from './actions';
import { of } from 'rxjs';

const USDA_API_KEY = 'FYTSTF75mesLeO85VFSKvqgWEzdL0hQAYCZUtjJk';

const searchEpic = action$ => action$.pipe(
  ofType(SEARCH),
  debounceTime(200),
  mergeMap(action =>
    ajax.getJSON(`https://api.nal.usda.gov/ndb/search?api_key=${USDA_API_KEY}&q=${encodeURIComponent(action.payload)}&ds=${encodeURIComponent('Standard Reference')}`).pipe(
      map(response => searchFulfilled(response)),
      catchError(error => of({
        type: SEARCH_REJECTED,
        payload: error.xhr.response,
        error: true
      }))
    )
  )
);

const rootEpic = combineEpics(searchEpic);
export default rootEpic;