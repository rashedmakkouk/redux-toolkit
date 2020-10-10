import { ReducerAction } from '../redux-toolkit';

/**
 * Update object key/value pairs.
 */
function updatePropsFolder(
  state: object,
  action: ReducerAction<object>
): object {
  const { payload } = action;

  return { ...state, ...payload };
}

function updatePropsSubFolder(
  state: object,
  action: ReducerAction<object>
): object {
  const { payload, subFolder } = action;

  return {
    ...state,
    [subFolder as string]: {
      ...(state[subFolder as string] || {}),
      ...payload,
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
