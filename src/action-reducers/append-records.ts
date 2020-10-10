import { ReducerAction } from '../redux-toolkit';

function appendRecordsFolder(
  state: any[],
  action: ReducerAction<any[]>
): object {
  const { payload } = action;

  return [...state, ...payload];
}

function appendRecordsSubFolder(
  state: object,
  action: ReducerAction<any[]>
): object {
  const { payload, subFolder } = action;

  return {
    ...state,
    [subFolder as string]: [...(state[subFolder as string] || []), ...payload],
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
