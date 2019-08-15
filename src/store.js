import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import rootReducer from './rootReducer.js';
import rootEpic from './rootEpic.js';

const epicMiddleware = createEpicMiddleware();
export const history = createBrowserHistory();

export default function configureStore(preloadedState) {
  const store = createStore(
    rootReducer(history),
    preloadedState,
    compose(applyMiddleware(routerMiddleware(history), epicMiddleware))
  );

  epicMiddleware.run(rootEpic);

  return store;
}