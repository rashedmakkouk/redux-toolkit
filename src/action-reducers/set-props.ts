/** Typings */
import { ReducerAction } from '../types';

/**
 * Store slice data type: Object.
 */
function setPropsFolder(
  state: object,
  action: ReducerAction<object>,
  initialState: object
): object {
  const { payload } = action;

  return { ...initialState, ...(payload || {}) };
}

/**
 * Store sub slice data type: Object.
 */
function setPropsSubFolder(
  state: object,
  action: ReducerAction<object>,
  initialState: object
): object {
  const { payload, subFolder } = action;

  return {
    ...state,
    [subFolder!]: { ...initialState, ...(payload || {}) },
  };
}

export function setProps(
  state: object,
  action: ReducerAction<object>,
  initialState: object
): object {
  return !action.subFolder
    ? setPropsFolder(state, action, initialState)
    : setPropsSubFolder(state, action, initialState);
}
