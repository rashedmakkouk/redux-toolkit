/** Typings */
import { ReducerAction } from '../types';

/**
 * Store slice data type: Object.
 */
function updatePropsFolder(
  state: object,
  action: ReducerAction<object>
): object {
  const { payload } = action;

  return { ...state, ...(payload || {}) };
}

/**
 * Store sub slice data type: Object.
 */
function updatePropsSubFolder(
  state: object,
  action: ReducerAction<object>
): object {
  const { payload, subFolder } = action;

  return {
    ...state,
    [subFolder!]: {
      ...(state[subFolder!] || {}),
      ...(payload || {}),
    },
  };
}

export function updateProps(
  state: object,
  action: ReducerAction<object>
): object {
  return !action.subFolder
    ? updatePropsFolder(state, action)
    : updatePropsSubFolder(state, action);
}
