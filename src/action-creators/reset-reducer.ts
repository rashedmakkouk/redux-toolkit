import { Action } from 'redux';
import { ResetReducerArgs } from '../redux-toolkit';
import { actionTypes } from '../common';

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
