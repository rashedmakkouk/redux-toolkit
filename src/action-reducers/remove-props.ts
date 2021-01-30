/** Utilities */
import isArray from 'lodash/isArray';

/** Typings */
import { ReducerAction } from '../types';

function removePropsState(state: object, key: string | string[]): object {
  const nextState = { ...state };

  const keys: string[] = !isArray(key) ? [key] : key;

  keys.map((k): void => {
    delete nextState[k];
  });

  return nextState;
}

function removePropsFolder(
  state: object,
  action: ReducerAction<string | string[]>
): object {
  const { payload } = action;

  return removePropsState(state, payload);
}

function removePropsSubFolder(
  state: object,
  action: ReducerAction<string | string[]>
): object {
  const { payload, subFolder } = action;

  return {
    ...state,
    [subFolder as string]: removePropsState(
      state[subFolder as string],
      payload
    ),
  };
}

export function removeProps(
  state: object,
  action: ReducerAction<string | string[]>
): object {
  return !action.subFolder
    ? removePropsFolder(state, action)
    : removePropsSubFolder(state, action);
}
