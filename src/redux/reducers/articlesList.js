import actions from "../actionTypes";
/**
 * Reducer for the article list state.
 * @typedef {object} ArticleListState
 * @property {object} data - The article list data.
 * @property {object} data.newsData - The news articles data.
 * @property {object} data.sportsData - The sports articles data.
 * @property {object} data.searchData - The search articles data.
 * @property {boolean} success - The status of the fetch operation.
 * @property {object} message - The error message from a fetch failure.
 */
const initialState = {
  data: {
    newsData: {},
    sportsData: {},
    searchData: {},
  },
  success: false,
  message: {},
};

/**
 * Article list reducer function.
 * @param {ArticleListState} state - The current article list state.
 * @param {object} action - The action object.
 * @param {string} action.type - The type of the action.
 * @param {object} action.payload - The payload of the action.
 * @returns {ArticleListState} The new article list state.
 */
const articleListReducer = (state = initialState, action) => {
  const { type, payload } = action;
  const { FETCH_ARTICLES_SUCCESS, FETCH_ARTICLES_FAILURE } = actions;

  switch (type) {
    case FETCH_ARTICLES_SUCCESS:
      const { searchData: currentSearchData } = state.data;
      const { searchData: newSearchData, newsData, sportsData } = payload;

      if (
        !currentSearchData.response ||
        currentSearchData?.response?.currentPage ===
          newSearchData?.response?.currentPage
      ) {
        return Object.assign({}, state, { data: payload, success: true });
      }

      const { response: currentResponse } = currentSearchData;
      const { results: newResults } = newSearchData.response;

      const response = Object.assign({}, currentResponse, {
        results: [...currentResponse?.results, ...newResults],
      });

      const searchData = Object.assign({}, currentSearchData, { response });

      return Object.assign({}, state, {
        data: {
          newsData,
          sportsData,
          searchData,
        },
        success: true,
      });

    case FETCH_ARTICLES_FAILURE:
      return { ...state, message: action.payload, success: false };
    default:
      return state;
  }
};

export default articleListReducer;
