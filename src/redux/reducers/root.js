/**
 * @typedef {Object} ArticlesListState
 * @property {Object} data - The articles data
 * @property {Object} data.newsData - The news articles data
 * @property {Object} data.sportsData - The sports articles data
 * @property {Object} data.searchData - The search articles data
 * @property {boolean} success - The flag indicating whether the articles fetching is successful or not
 * @property {Object} message - The error message object
 */

/**
 * @typedef {Object} ArticleContentState
 * @property {Object} data - The article content data
 * @property {boolean} success - The flag indicating whether the article content fetching is successful or not
 * @property {Object} message - The error message object
 */

/**
 * @typedef {Object} LoaderState
 * @property {boolean} value - The flag indicating whether to show the loader or not
 */

/**
 * @typedef {Object} QueryState
 * @property {string} value - The search query string
 */

/**
 * @typedef {Object} RootState
 * @property {ArticlesListState} articlesList - The articles list state
 * @property {ArticleContentState} articleContent - The article content state
 * @property {LoaderState} loading - The loader state
 * @property {QueryState} query - The search query state
 */

import { combineReducers } from "redux";
import articlesListReducer from "./articlesList";
import articleContentReducer from "./articleContent";
import loaderReducer from "./loader";
import queryReducer from "./query";

/**
 * The root reducer function.
 *
 * @function
 * @param {RootState} state - The root state
 * @param {Object} action - The action object
 * @returns {RootState} The new root state
 */

const rootReducer = combineReducers({
  articlesList: articlesListReducer,
  articleContent: articleContentReducer,
  loading: loaderReducer,
  query: queryReducer,
});

export default rootReducer;
