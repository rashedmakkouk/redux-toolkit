/** Utilities */
import { actionTypes } from '../common';

/** Typings */
import { ReducerAction, ReducerActionArgs } from '../types';

const { SET_PROPS } = actionTypes;

/**
 * Sets supplied object properties by resetting initial state.
 */
export function setProps(
  args: ReducerActionArgs<object>
): ReducerAction<object> {
  return {
    ...args,
    type: SET_PROPS,
  };
}
