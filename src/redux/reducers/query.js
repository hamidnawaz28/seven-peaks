/**
 * Reducer for managing the query state in the Redux store.
 * @param {string} state - The current query state.
 * @param {object} action - The action object to be dispatched.
 * @param {string} action.type - The action type.
 * @param {string} action.payload - The new query value.
 * @returns {string} - The new query state.
 */
import actions from "../actionTypes";

const initialState = "";

const queryReducer = (state = initialState, action) => {
  const { type, payload } = action;
  if (type === actions.UPDATE_QUERY) return payload;
  return state;
};

export default queryReducer;
