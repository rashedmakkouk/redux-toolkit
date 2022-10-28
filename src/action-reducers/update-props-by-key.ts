/** Typings */
import { ReducerAction, ReducerActionArgs } from '../types';

function updatePropsByKeyState(state: object, payload: object): object {
  const nextState = { ...state };

  /** key === 'id' */
  Object.keys(payload).map((key): void => {
    nextState[key] = { ...(nextState[key] || {}), ...payload[key] };
  });

  return nextState;
}

function updatePropsByKeyFolder(
  state: object,
  action: ReducerAction<ReducerActionArgs<Object>>
): object {
  const { payload } = action;

  return updatePropsByKeyState(state, payload);
}

function updatePropsByKeySubFolder(
  state: object,
  action: ReducerAction<ReducerActionArgs<Object>>
): object {
  const { payload, subFolder } = action;

  return {
    ...state,
    [subFolder!]: updatePropsByKeyState(state[subFolder!] as object, payload),
  };
}

export function updatePropsByKey(
  state: object,
  action: ReducerAction<ReducerActionArgs<Object>>
): object {
  return !action.subFolder
    ? updatePropsByKeyFolder(state, action)
    : updatePropsByKeySubFolder(state, action);
}
