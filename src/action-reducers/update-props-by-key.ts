import { ReducerAction } from '../redux-toolkit';

/**
 * @param payload - Object of objects with `id` as key.
 */
function updatePropsByKeyState(state: object, payload: object): object {
  const nextState = { ...state };

  /** key === 'id' */
  Object.keys(payload).map((key): void => {
    nextState[key] = { ...(nextState[key] || {}), ...payload[key] };
  });

  return nextState;
}

/**
 * Update nested objects; useful with normalized payloads.
 */
function updatePropsByKeyFolder(
  state: object,
  action: ReducerAction<object>
): object {
  const { payload } = action;

  return updatePropsByKeyState(state, payload);
}

function updatePropsByKeySubFolder(
  state: object,
  action: ReducerAction<object>
): object {
  const { payload, subFolder } = action;

  return {
    ...state,
    [subFolder as string]: updatePropsByKeyState(
      state[subFolder as string],
      payload
    ),
  };
}

export function updatePropsByKey(
  state: object,
  action: ReducerAction<object>
): object {
  return !action.subFolder
    ? updatePropsByKeyFolder(state, action)
    : updatePropsByKeySubFolder(state, action);
}
