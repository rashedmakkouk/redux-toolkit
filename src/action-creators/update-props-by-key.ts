/** Utilities */
import { actionTypes } from '../common';
/** Typings */
import { ReducerAction, ReducerActionArgs } from '../types';

const { UPDATE_PROPS_BY_KEY } = actionTypes;

/**
 * Iterates over normalized data structures by Object keys, updates child
 * objects properties if exist, else adds a new record.
 *
 * Example:
 *
 * \{
 *  "slice-name": \{
 *    "123": \{ "id": 1 \},
 *    "456": \{ "id": 2 \}
 *  \}
 * \}
 */
export function updatePropsByKey(
  args: ReducerActionArgs<object>
): ReducerAction<ReducerActionArgs<object>> {
  return {
    ...args,
    type: UPDATE_PROPS_BY_KEY,
  };
}
