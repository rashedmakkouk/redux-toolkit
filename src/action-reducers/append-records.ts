/** Typings */
import { ReducerAction } from '../types';

function appendRecordsFolder(
  state: any[],
  action: ReducerAction<any[]>
): object {
  const { payload } = action;

  return [...state, ...(payload || [])];
}

function appendRecordsSubFolder(
  state: object,
  action: ReducerAction<any[]>
): object {
  const { payload, subFolder } = action;

  return {
    ...state,
    [subFolder!]: [...(state[subFolder!] || []), ...(payload || [])],
  };
}

export function appendRecords(
  state: object | any[],
  action: ReducerAction<any[]>
): object {
  return !action.subFolder
    ? appendRecordsFolder(state as any[], action)
    : appendRecordsSubFolder(state, action);
}
