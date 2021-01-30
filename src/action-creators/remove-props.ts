/** Utilities */
import { actionTypes } from '../common';

/** Typings */
import { ReducerAction, ReducerActionArgs } from '../types';

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
