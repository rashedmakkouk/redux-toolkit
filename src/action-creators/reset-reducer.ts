/** Utilities */
import { Action } from 'redux';
import { actionTypes } from '../common';

/** Typings */
import { ResetReducerArgs } from '../types';

const { RESET_REDUCER } = actionTypes;

/**
 * Resets Store slice to initial state and default values.
 */
export function resetReducer(
  args: ResetReducerArgs
): ResetReducerArgs & Action<string> {
  return {
    ...args,
    type: RESET_REDUCER,
  };
}
