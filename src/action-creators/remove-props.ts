import { ReducerAction, ReducerActionArgs } from '../redux-toolkit';
import { actionTypes } from '../common';

const { REMOVE_PROPS } = actionTypes;

/**
 * Removes key(s) from object.
 */
export function removeProps(
  args: ReducerActionArgs<string | string[]>
): ReducerAction<string | string[]> {
  return {
    ...args,
    type: REMOVE_PROPS,
  };
}
