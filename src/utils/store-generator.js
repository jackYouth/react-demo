import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import reduxComposableFetch from '../middlewares/composable-fetch';
import logger from '../middlewares/redux-logger';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

export default function storeGenerator(reducers, defaultState, ...middlewares) {
  return createStore(
    reducers,
    defaultState,
    // preloadedState,
    composeEnhancers(
      applyMiddleware(
        reduxThunk,
        reduxComposableFetch,
        promiseMiddleware(),
        logger,
        ...middlewares
      )
    )
  );
}
