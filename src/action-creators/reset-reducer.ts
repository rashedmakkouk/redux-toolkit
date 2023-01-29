/** Utilities */
import { actionTypes } from '../common';
/** Typings */
import { ReducerAction, ResetReducerArgs } from '../types';

const { RESET_REDUCER } = actionTypes;

/**
 * Resets Store slice to initial state and default values.
 */
export function resetReducer(
  args: ResetReducerArgs
): ReducerAction<ResetReducerArgs> {
  return {
    ...args,
    type: RESET_REDUCER,
  };
}
