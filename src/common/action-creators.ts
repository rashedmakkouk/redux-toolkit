import { actionTypes } from '../constants';
import { AnyAction } from 'redux';

const {
  RESET_REDUCER_SUBSTATE,
  RESET_REDUCER_STATE,
  SET_RECORDS_SUBFOLDER,
  SET_RECORDS_FOLDER,
  APPEND_RECORDS_SUBFOLDER,
  APPEND_RECORDS_FOLDER,
  PREPEND_RECORDS_SUBFOLDER,
  PREPEND_RECORDS_FOLDER,
  REMOVE_RECORDS_BY_FOLDER,
  REMOVE_RECORDS_BY_SUBFOLDER,
  SET_PROPS_FOLDER,
  SET_PROPS_SUBFOLDER,
  RESET_PROP_FOLDER,
  RESET_PROP_SUBFOLDER,
  REMOVE_PROPS_FOLDER,
  REMOVE_PROPS_SUBFOLDER,
  END_PROGRESS,
  START_PROGRESS,
  APP_RELOAD,
  STORE_RESET,
  UPDATE_PROPS_SUBFOLDER,
  UPDATE_PROPS_FOLDER,
  UPDATE_BY_ID_SUBFOLDER,
  UPDATE_BY_ID_FOLDER,
  CONNECT_WEBSOCKET,
  SEND_WEBSOCKET_MESSAGE,
} = actionTypes;

/**
 * folder/subFolder
 * @param folder - string - top level store key (reducer)
 * @param subFolder - string - sub level store key
 */

// TODO: Migrate multi params to object keys.

export function resetReducer(reducer: string, subState?: boolean): any {
  return {
    reducer,
    subState,
    type: subState ? RESET_REDUCER_SUBSTATE : RESET_REDUCER_STATE,
  };
}

export function reloadApp(): AnyAction {
  return {
    folder: 'config',
    payload: { appKey: undefined },
    type: APP_RELOAD,
  };
}

export function resetStore(): AnyAction {
  return {
    type: STORE_RESET,
  };
}

// Array of Object(s); adds payload to end of array
export function setRecords(
  payload: any[],
  folder: string,
  subFolder?: string
): any {
  return {
    folder,
    payload,
    subFolder,
    type: subFolder ? SET_RECORDS_SUBFOLDER : SET_RECORDS_FOLDER,
  };
}

// Array of Object(s); adds payload to end of array
export function appendRecords(
  payload: any[],
  folder: string,
  subFolder?: string
): any {
  return {
    folder,
    payload,
    subFolder,
    type: subFolder ? APPEND_RECORDS_SUBFOLDER : APPEND_RECORDS_FOLDER,
  };
}

// Array of Object(s); adds payload to start of array
export function prependRecords(
  payload: any[],
  folder: string,
  subFolder?: string
): any {
  return {
    folder,
    payload,
    subFolder,
    type: subFolder ? PREPEND_RECORDS_SUBFOLDER : PREPEND_RECORDS_FOLDER,
  };
}

export function removeRecordsBy(
  key: string,
  payload: string[],
  folder: string,
  subFolder?: string
): any {
  return {
    folder,
    key,
    payload,
    subFolder,
    type: subFolder ? REMOVE_RECORDS_BY_SUBFOLDER : REMOVE_RECORDS_BY_FOLDER,
  };
}

export function setProps(args: {
  payload: object;
  folder: string;
  subFolder?: string;
}): any {
  return {
    ...args,
    type: !args.subFolder ? SET_PROPS_FOLDER : SET_PROPS_SUBFOLDER,
  };
}

export function updateProps(args: {
  folder: string;
  payload: object;
  subFolder?: string;
}): any {
  return {
    ...args,
    type: !args.subFolder ? UPDATE_PROPS_FOLDER : UPDATE_PROPS_SUBFOLDER,
  };
}

export function updateById(args: {
  folder: string;
  payload: object;
  subFolder?: string;
}): any {
  return {
    ...args,
    type: !args.subFolder ? UPDATE_BY_ID_FOLDER : UPDATE_BY_ID_SUBFOLDER,
  };
}

export function resetProp(
  key: string,
  folder: string,
  subFolder?: string
): any {
  return {
    folder,
    key,
    subFolder,
    type: subFolder ? RESET_PROP_SUBFOLDER : RESET_PROP_FOLDER,
  };
}

export function removeProps(args: {
  folder: string;
  key: string | string[];
  subFolder?: string;
}): any {
  return {
    ...args,
    type: !args.subFolder ? REMOVE_PROPS_FOLDER : REMOVE_PROPS_SUBFOLDER,
  };
}

export function startProgress(loader: string): any {
  return {
    folder: 'progress',
    loader,
    type: START_PROGRESS,
  };
}

export function endProgress(loader: string): any {
  return {
    folder: 'progress',
    loader,
    type: END_PROGRESS,
  };
}

export const connectWebSocket = (): any => ({
  type: CONNECT_WEBSOCKET,
});

export const sendWebSocketMessage = (): any => ({
  type: SEND_WEBSOCKET_MESSAGE,
});
