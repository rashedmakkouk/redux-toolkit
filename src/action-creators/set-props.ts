/** Utilities */
import { actionTypes } from '../common';
/** Typings */
import { ReducerAction, ReducerActionArgs } from '../types';

const { SET_PROPS } = actionTypes;

/**
 * Resets Store Object slice to initial state and updates object properties
 * with supplied key/value pairs `payload`.
 */
export function setProps(
  args: ReducerActionArgs<object>
): ReducerAction<ReducerActionArgs<object>> {
  return {
    ...args,
    type: SET_PROPS,
  };
}
