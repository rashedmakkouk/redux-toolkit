/** Utilities */
import { actionTypes } from '../common';

/** Typings */
import { ReducerAction, ReducerActionArgs } from '../types';

const { UPDATE_PROPS_BY_KEY } = actionTypes;

/**
 * Iterates over normalized data structures by `key`, updates object properties
 * if exists, else adds a new record.
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
  args: ReducerActionArgs<Object>
): ReducerAction<ReducerActionArgs<Object>> {
  return {
    ...args,
    type: UPDATE_PROPS_BY_KEY,
  };
}
