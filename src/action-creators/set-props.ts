/** Utilities */
import { actionTypes } from '../common';

/** Typings */
import { ReducerAction, ReducerActionArgs } from '../types';

const { SET_PROPS } = actionTypes;

/**
 * Resets Store slice to initial state and updates object properties with
 * supplied key/value pairs payload.
 */
export function setProps(
  args: ReducerActionArgs<object>
): ReducerAction<object> {
  return {
    ...args,
    type: SET_PROPS,
  };
}
