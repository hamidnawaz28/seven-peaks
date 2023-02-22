import actions from "../actionTypes";
/**
 * Initial state of the article content reducer.
 *
 * @typedef {Object} initialState
 * @property {Object} data - The data object.
 * @property {boolean} success - A boolean indicating whether the request was successful or not.
 * @property {Object} message - The message object.
 */

const initialState = {
  data: {},
  success: false,
  message: {},
};

/**
 * The reducer function for article content.
 *
 * @param {initialState} state - The current state.
 * @param {Object} action - The action to be performed.
 * @param {string} action.type - The type of the action to be performed.
 * @param {Object} action.payload - The payload of the action to be performed.
 *
 * @returns {initialState} - The new state.
 */
const articleContentReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actions.FETCH_ARTICLES_CONTENT_SUCCESS:
      return { ...state, data: payload, success: true };
    case actions.FETCH_ARTICLES_CONTENT_FAILURE:
      return { ...state, message: payload, success: false };
    default:
      return state;
  }
};

export default articleContentReducer;
