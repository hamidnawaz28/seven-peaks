import { all } from "redux-saga/effects";
import articleContent from "./articleContent";
import articlesList from "./articlesList";

/**
 * The root saga function that combines all the sagas in the application.
 * @generator
 * @function
 * @returns {void}
 */

function* rootSaga() {
  yield all([articleContent(), articlesList()]);
}

export default rootSaga;
