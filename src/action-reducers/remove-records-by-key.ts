/** Typings */
import { ReducerAction, RemoveRecordsByKeyArgs } from '../types';

function removeRecordsByKeyState(
  state: object[],
  key: string,
  payload: Array<string | number>
): object[] {
  return [state || []].filter((record: object): boolean => {
    return !(payload || []).includes(record[key] as string | number);
  });
}

function removeRecordsByKeyFolder(
  state: object[],
  action: ReducerAction<RemoveRecordsByKeyArgs>
): object {
  const { key, payload } = action;

  return removeRecordsByKeyState(state, key, payload);
}

function removeRecordsByKeySubFolder(
  state: object,
  action: ReducerAction<RemoveRecordsByKeyArgs>
): object {
  const { key, payload, subFolder } = action;

  return {
    ...state,
    [subFolder!]: removeRecordsByKeyState(
      state[subFolder!] as object[],
      key,
      payload
    ),
  };
}

export function removeRecordsByKey(
  state: object | object[],
  action: ReducerAction<RemoveRecordsByKeyArgs>
): object {
  return !action.subFolder
    ? removeRecordsByKeyFolder(state as object[], action)
    : removeRecordsByKeySubFolder(state, action);
}
