/** Utilities */
import { actionTypes } from '../common';
/** Typings */
import { ReducerAction, RemoveRecordsByKeyArgs } from '../types';

const { REMOVE_RECORDS_BY_KEY } = actionTypes;

/**
 * Removes Object records from Array by specified `key` with values matching
 * supplied `payload`.
 *
 * Use case:
 *
 * - Slice Reducer data type: Array.
 * - Sub Slice Reducer data type: Array.
 */
export function removeRecordsByKey(
  args: RemoveRecordsByKeyArgs
): ReducerAction<RemoveRecordsByKeyArgs> {
  return {
    ...args,
    type: REMOVE_RECORDS_BY_KEY,
  };
}
