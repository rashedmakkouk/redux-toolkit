import { ReducerAction, ReducerActionArgs } from '../redux-toolkit';
import { actionTypes } from '../common';

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
