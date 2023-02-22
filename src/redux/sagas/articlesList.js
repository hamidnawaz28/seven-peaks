/**
 * A saga to fetch the article list from the server.
 * @generator
 * @function
 * @param {Object} action - The action object that triggered the saga.
 * @param {Object} action.payload - The payload object containing the filter and query parameters.
 * @param {string} action.payload.filter - The filter to be used for the search.
 * @param {string} action.payload.query - The query to be used for the search.
 */

import { put, takeLatest } from "redux-saga/effects";
import actionTypes from "../actionTypes";
import {
  updateLoader,
  getArticlesListSuccess,
  getArticlesListFailure,
} from "../actions";
import { searchContent } from "../../api/search-content";

function* fetchArticleList(action) {
  const { filter, query, haveQuery, nextPage } = action.payload;
  try {
    yield put(updateLoader(true));
    const data = { newsData: {}, sportsData: {}, searchData: {} };
    if (haveQuery) {
      const { data: searchData } = yield searchContent(
        "",
        filter,
        15,
        query,
        true,
        nextPage
      );
      data.searchData = searchData;
    } else {
      const { data: newsData } = yield searchContent("news", filter, 8);
      const { data: sportsData } = yield searchContent("sport", "newest", 3);
      data.newsData = newsData;
      data.sportsData = sportsData;
    }

    yield put(getArticlesListSuccess(data));
    yield put(updateLoader(false));
  } catch (error) {
    debugger;
    yield put(getArticlesListFailure(error));
  }
}

/**
 * A saga watcher that triggers the fetchArticleList saga whenever a FETCH_ARTICLES_REQUEST action is dispatched.
 * @generator
 * @function
 */
function* fetchArticleListSaga() {
  yield takeLatest(actionTypes.FETCH_ARTICLES_REQUEST, fetchArticleList);
}

export default fetchArticleListSaga;
