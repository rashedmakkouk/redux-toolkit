import { ReducerAction, ReducerActionArgs } from '../redux-toolkit';
import { actionTypes } from '../common';

const { UPDATE_PROPS_BY_KEY } = actionTypes;

/**
 * Iterates over supplied objet properties and updates existing values by `key`.
 *
 * @remarks
 * Useful for normalized data payloads (e.g. \{ "123": object \})
 */
export function updatePropsByKey(
  args: ReducerActionArgs<object>
): ReducerAction<object> {
  return {
    ...args,
    type: UPDATE_PROPS_BY_KEY,
  };
}
