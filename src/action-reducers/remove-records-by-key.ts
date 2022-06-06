/** Typings */
import { RemoveRecordsByAction } from '../types';

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
  action: RemoveRecordsByAction
): object {
  const { key, payload } = action;

  return removeRecordsByKeyState(state, key, payload);
}

function removeRecordsByKeySubFolder(
  state: object,
  action: RemoveRecordsByAction
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
  action: RemoveRecordsByAction
): object {
  return !action.subFolder
    ? removeRecordsByKeyFolder(state as object[], action)
    : removeRecordsByKeySubFolder(state, action);
}
