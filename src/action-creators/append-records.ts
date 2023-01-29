/** Utilities */
import { actionTypes } from '../common';
/** Typings */
import { ReducerAction, ReducerActionArgs } from '../types';

const { APPEND_RECORDS } = actionTypes;

/**
 * Appends Array payload to the end of an existing array.
 *
 * Use case:
 *
 * - Slice Reducer data type: Array.
 * - Slice Reducer data type: Object, Sub Slice data type: Array.
 */
export function appendRecords(
  args: ReducerActionArgs<unknown[]>
): ReducerAction<ReducerActionArgs<unknown[]>> {
  return {
    ...args,
    type: APPEND_RECORDS,
  };
}
