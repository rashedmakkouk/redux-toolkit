/** Typings */
import { ReducerAction, ReducerActionArgs } from '../types';

function updatePropsByKeyState(state: object, payload: object): object {
  const nextState = { ...state };

  Object.keys(payload).map((key): void => {
    nextState[key] = { ...(nextState[key] || {}), ...payload[key] } as object;
  });

  return nextState;
}

function updatePropsByKeyFolder(
  state: object,
  action: ReducerAction<ReducerActionArgs<object>>
): object {
  const { payload } = action;

  return updatePropsByKeyState(state, payload);
}

function updatePropsByKeySubFolder(
  state: object,
  action: ReducerAction<ReducerActionArgs<object>>
): object {
  const { payload, subFolder } = action;

  return {
    ...state,
    /* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */
    [subFolder!]: updatePropsByKeyState(state[subFolder!] as object, payload),
  };
}

export function updatePropsByKey(
  state: object,
  action: ReducerAction<ReducerActionArgs<object>>
): object {
  return !action.subFolder
    ? updatePropsByKeyFolder(state, action)
    : updatePropsByKeySubFolder(state, action);
}
