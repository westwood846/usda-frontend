import { createStore, applyMiddleware, compose } from "redux";
import { createEpicMiddleware } from "redux-observable";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import rootReducer from "./rootReducer.js";
import rootEpic from "./rootEpic.js";

const epicMiddleware = createEpicMiddleware();
export const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL + "/",
});

export default function configureStore(preloadedState) {
  const store = createStore(
    rootReducer(history),
    preloadedState,
    compose(
      applyMiddleware(routerMiddleware(history), epicMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        process.env.NODE_ENV === "development"
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : (f) => f
    )
  );

  epicMiddleware.run(rootEpic);

  return store;
}
