/** Utilities */
import { Action } from 'redux';
import { actionTypes } from '../common';

const { PURGE_STORE, RESET_STORE } = actionTypes;

/**
 * Dispatches action to reset and/or purge Store state.
 */
export function resetStore(purge?: boolean): Action<string> {
  return {
    type: purge === true ? PURGE_STORE : RESET_STORE,
  };
}
