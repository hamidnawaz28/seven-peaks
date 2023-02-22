/**
 * Reducer for handling the state of a loader in the application.
 *
 * @typedef {Object} Action
 * @property {string} type - The type of action to perform.
 * @property {*} payload - The data associated with the action.
 *
 * @typedef {boolean} State - The current state of the loader in the application.
 *
 * @param {State} state - The current state of the loader in the application.
 * @param {Action} action - The action to perform on the loader state.
 *
 * @returns {State} The updated state of the loader.
 */
import actions from "../actionTypes";

const initialState = false;

const loaderReducer = (state = initialState, action) => {
  const { type, payload } = action;
  if (type === actions.UPDATE_LOADER) return payload;
  return state;
};

export default loaderReducer;
