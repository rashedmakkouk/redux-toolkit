/** Utilities */
import { actionTypes } from '../common';

/** Typings */
import { ReducerAction, ReducerActionArgs } from '../types';

const { REMOVE_PROPS } = actionTypes;

/**
 * Removes object properties by supplied `key(s)` payload.
 *
 * Use case:
 *
 * - Object properties.
 * - Normalized Object records.
 */
export function removeProps(
  args: ReducerActionArgs<string | string[]>
): ReducerAction<ReducerActionArgs<string | string[]>> {
  return {
    ...args,
    type: REMOVE_PROPS,
  };
}
