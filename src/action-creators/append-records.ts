/** Utilities */
import { actionTypes } from '../common';

/** Typings */
import { ReducerAction, ReducerActionArgs } from '../types';

const { APPEND_RECORDS } = actionTypes;

/**
 * Adds `array` payload to existing property array value.
 */
export function appendRecords(
  args: ReducerActionArgs<any[]>
): ReducerAction<any[]> {
  return {
    ...args,
    type: APPEND_RECORDS,
  };
}
