/** Typings */
import { ReducerAction, ReducerActionArgs } from '../types';

/**
 * Store slice data type: Object.
 */
function setPropsFolder(
  state: object,
  action: ReducerAction<ReducerActionArgs<Object>>,
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
  action: ReducerAction<ReducerActionArgs<Object>>,
  initialState: object
): object {
  const { payload, subFolder } = action;

  return {
    ...state,
    [subFolder!]: { ...initialState, ...(payload || {}) },
  };
}

/**
 * Usage: In case of updates to the sub slice, the 'state' argument will be
 * used to populate the root slice data with the recent values, and resets the
 * sub slice to its original structure before inserting new 'payload'.
 */
export function setProps(
  state: object,
  action: ReducerAction<ReducerActionArgs<Object>>,
  initialState: object
): object {
  return !action.subFolder
    ? setPropsFolder(state, action, initialState)
    : setPropsSubFolder(state, action, initialState);
}
