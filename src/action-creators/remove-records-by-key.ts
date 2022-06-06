/** Utilities */
import { actionTypes } from '../common';

/** Typings */
import { RemoveRecordsByAction, RemoveRecordsByArgs } from '../types';

const { REMOVE_RECORDS_BY_KEY } = actionTypes;

/**
 * Removes Object records from Array by specified `key` with values matching
 * supplied `payload`.
 *
 * Use case:
 *
 * - Slice Reducer data type: Array.
 * - Slice Reducer data type: Object, Sub Slice data type: Array.
 */
export function removeRecordsByKey(
  args: RemoveRecordsByArgs
): RemoveRecordsByAction {
  return {
    ...args,
    type: REMOVE_RECORDS_BY_KEY,
  };
}
