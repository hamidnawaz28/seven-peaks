import actions from "./actionTypes";

/**
 * Creates an action object for fetching articles list request.
 *
 * @param {Object} payload - The payload object containing filter and query parameters.
 * @param {string} payload.filter - The filter parameter.
 * @param {string} payload.query - The query parameter.
 * @returns {Object} An action object with type and payload properties.
 */
function getArticlesListRequest(payload) {
  return {
    type: actions.FETCH_ARTICLES_REQUEST,
    payload: payload,
  };
}

/**
 * Creates an action object for successful articles list request.
 *
 * @param {Object} data - The data object containing newsData, sportsData, and searchData.
 * @param {Object} data.newsData - The news data object.
 * @param {Object} data.sportsData - The sports data object.
 * @param {Object} data.searchData - The search data object.
 * @returns {Object} An action object with type and payload properties.
 */
function getArticlesListSuccess(data) {
  return {
    type: actions.FETCH_ARTICLES_SUCCESS,
    payload: data,
  };
}

/**
 * Creates an action object for failed articles list request.
 *
 * @param {Object} data - The data object containing the error message.
 * @returns {Object} An action object with type and payload properties.
 */
function getArticlesListFailure(data) {
  return {
    type: actions.FETCH_ARTICLES_FAILURE,
    payload: data,
  };
}

/**
 * Creates an action object for fetching article content request.
 *
 * @param {string} url - The url of the article content.
 * @returns {Object} An action object with type and payload properties.
 */
function getContentRequest(url) {
  return {
    type: actions.FETCH_ARTICLES_CONTENT_REQUEST,
    payload: url,
  };
}

/**
 * Creates an action object for successful article content request.
 *
 * @param {Object} data - The data object containing the article content.
 * @returns {Object} An action object with type and payload properties.
 */
function getContentSuccess(data) {
  return {
    type: actions.FETCH_ARTICLES_CONTENT_SUCCESS,
    payload: data,
  };
}

/**
 * Creates an action object for failed article content request.
 *
 * @param {Object} data - The data object containing the error message.
 * @returns {Object} An action object with type and payload properties.
 */
function getContentFailure(data) {
  return {
    type: actions.FETCH_ARTICLES_CONTENT_FAILURE,
    payload: data,
  };
}

/**
 * Creates an action object for updating loader state.
 *
 * @param {boolean} isLoading - The flag indicating whether the loader should be displayed.
 * @returns {Object} An action object with type and payload properties.
 */
function updateLoader(isLoading) {
  return {
    type: actions.UPDATE_LOADER,
    payload: isLoading,
  };
}

/**
 * Creates an action object for updating query state.
 *
 * @param {string} query - The search query.
 * @returns {Object} An action object with type and payload properties.
 */
function updateQuery(query) {
  return {
    type: actions.UPDATE_QUERY,
    payload: query,
  };
}

export {
  getArticlesListRequest,
  getArticlesListSuccess,
  getArticlesListFailure,
  getContentRequest,
  getContentSuccess,
  getContentFailure,
  updateLoader,
  updateQuery,
};
