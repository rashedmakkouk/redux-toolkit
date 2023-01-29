/** Typings */
import { ReducerAction, ReducerActionArgs } from '../types';

function appendRecordsFolder(
  state: unknown[],
  action: ReducerAction<ReducerActionArgs<unknown[]>>
): object {
  const { payload } = action;

  return [...state, ...(payload || [])];
}

function appendRecordsSubFolder(
  state: object,
  action: ReducerAction<ReducerActionArgs<unknown[]>>
): object {
  const { payload, subFolder } = action;

  return {
    ...state,
    /* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */
    [subFolder!]: [
      /* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */
      ...((state[subFolder!] || []) as unknown[]),
      ...(payload || []),
    ],
  };
}

export function appendRecords(
  state: object | unknown[],
  action: ReducerAction<ReducerActionArgs<unknown[]>>
): object {
  return !action.subFolder
    ? appendRecordsFolder(state as unknown[], action)
    : appendRecordsSubFolder(state, action);
}
