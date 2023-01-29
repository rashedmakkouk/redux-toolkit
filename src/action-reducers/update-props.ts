/** Typings */
import { ReducerAction, ReducerActionArgs } from '../types';

/**
 * Store slice data type: Object.
 */
function updatePropsFolder(
  state: object,
  action: ReducerAction<ReducerActionArgs<object>>
): object {
  const { payload } = action;

  return { ...state, ...(payload || {}) };
}

/**
 * Store sub slice data type: Object.
 */
function updatePropsSubFolder(
  state: object,
  action: ReducerAction<ReducerActionArgs<object>>
): object {
  const { payload, subFolder } = action;

  return {
    ...state,
    /* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */
    [subFolder!]: {
      /* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */
      ...(state[subFolder!] || {}),
      ...(payload || {}),
    } as object,
  };
}

export function updateProps(
  state: object,
  action: ReducerAction<ReducerActionArgs<object>>
): object {
  return !action.subFolder
    ? updatePropsFolder(state, action)
    : updatePropsSubFolder(state, action);
}
