/** Utilities */
import { actionTypes } from '../common';

/** Typings */
import { ReducerAction, ReducerActionArgs } from '../types';

const { UPDATE_PROPS } = actionTypes;

/**
 * Overwrites existing object key's values.
 */
export function updateProps(
  args: ReducerActionArgs<object>
): ReducerAction<object> {
  return {
    ...args,
    type: UPDATE_PROPS,
  };
}
