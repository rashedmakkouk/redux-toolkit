/** Utilities */
import { Action } from 'redux';
import { actionTypes } from '../common';

/** Typings */
import { ResetReducerArgs } from '../types';

const { RESET_REDUCER } = actionTypes;

/**
 * Resets `reducer` to initial state structure.
 */
export function resetReducer(
  args: ResetReducerArgs
): ResetReducerArgs & Action<string> {
  return {
    ...args,
    type: RESET_REDUCER,
  };
}
