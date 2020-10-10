import { Action } from 'redux';
import { actionTypes } from '../common';

const { RESET_STORE } = actionTypes;

/**
 * Returns action of type `RESET_STORE`.
 */
export function resetStore(): Action<string> {
  return {
    type: RESET_STORE,
  };
}
