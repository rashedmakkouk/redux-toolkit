/** Utilities */
import { actionTypes } from '../common';
/** Typings */
import { ReducerAction, ReducerActionArgs } from '../types';

const { UPDATE_PROPS } = actionTypes;

/**
 * Updates object key/value pairs with supplied `payload`.
 */
export function updateProps(
  args: ReducerActionArgs<object>
): ReducerAction<ReducerActionArgs<object>> {
  return {
    ...args,
    type: UPDATE_PROPS,
  };
}
