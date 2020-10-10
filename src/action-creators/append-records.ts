import { ReducerAction, ReducerActionArgs } from '../redux-toolkit';
import { actionTypes } from '../common';

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
