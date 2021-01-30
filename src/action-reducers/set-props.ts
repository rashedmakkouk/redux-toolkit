/** Typings */
import { ReducerAction } from '../types';

function setPropsFolder(
  state: object,
  action: ReducerAction<object>,
  initialState: object
): object {
  const { payload } = action;

  return { ...initialState, ...payload };
}

function setPropsSubFolder(
  state: object,
  action: ReducerAction<object>,
  initialState: object
): object {
  const { payload, subFolder } = action;

  return {
    ...state,
    [subFolder as string]: { ...initialState, ...payload },
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
