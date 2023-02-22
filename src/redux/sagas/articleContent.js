import { put, takeLatest } from "redux-saga/effects";
import actionTypes from "../actionTypes";
import { getContentSuccess, getContentFailure, updateLoader } from "../actions";
import { searchItem } from "../../api/search-content";

/**
 * Saga generator function to fetch article content
 *
 * @generator
 * @param {object} action - Redux action object
 * @param {string} action.payload - The article content ID to fetch
 * @yields {object} - The updated loader status
 * @yields {object} - The article content data
 * @throws {object} - The error object
 */
function* fetchArticleContent(action) {
  const { payload } = action;
  try {
    yield put(updateLoader(true));
    const { data: itemData } = yield searchItem(payload);
    yield put(getContentSuccess(itemData));
    yield put(updateLoader(false));
  } catch (error) {
    debugger;
    yield put(getContentFailure(error));
  }
}

/**
 * Saga watcher function for article content
 *
 * @generator
 */
function* articleContentSaga() {
  yield takeLatest(
    actionTypes.FETCH_ARTICLES_CONTENT_REQUEST,
    fetchArticleContent
  );
}

export default articleContentSaga;
