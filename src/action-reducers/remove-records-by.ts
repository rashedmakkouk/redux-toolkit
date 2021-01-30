/** Typings */
import { RemoveRecordsByAction } from '../types';

function removeRecordsByState(
  state: object[],
  key: string,
  payload: string[]
): object[] {
  return [...(state || [])].filter((record: object): boolean => {
    return !payload.includes(record[key]);
  });
}

function removeRecordsByFolder(
  state: object[],
  action: RemoveRecordsByAction
): object {
  const { key, payload } = action;

  return removeRecordsByState(state, key, payload);
}

function removeRecordsBySubFolder(
  state: object,
  action: RemoveRecordsByAction
): object {
  const { key, payload, subFolder } = action;

  return {
    ...state,
    [subFolder as string]: removeRecordsByState(
      state[subFolder as string],
      key,
      payload
    ),
  };
}

export function removeRecordsBy(
  state: object | object[],
  action: RemoveRecordsByAction
): object {
  return !action.subFolder
    ? removeRecordsByFolder(state as object[], action)
    : removeRecordsBySubFolder(state, action);
}
