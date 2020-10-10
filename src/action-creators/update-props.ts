import { ReducerAction, ReducerActionArgs } from '../redux-toolkit';
import { actionTypes } from '../common';

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
