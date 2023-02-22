import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers/root";
import rootSaga from "./sagas/root";

/**
 * Creates a new instance of the Redux Saga middleware
 */
const sagaMiddleware = createSagaMiddleware();

/**
 * Creates a Redux store that holds the complete state tree of your app
 */
const store = createStore(
  rootReducer,
  compose(applyMiddleware(sagaMiddleware))
);

// Starts the root saga
sagaMiddleware.run(rootSaga);

export default store;
