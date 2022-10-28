import { Action } from 'redux';

export interface ReducerActionArgs<PayloadT = any> {
  folder: string;
  payload: PayloadT;
  subFolder?: string;
}

export type ReducerAction<ExtraPropsT = { [extraProp: string]: any }> =
  ExtraPropsT & Action<string>;

export interface ResetReducerArgs extends Pick<ReducerActionArgs, 'folder'> {}

export interface RemoveRecordsByKeyArgs
  extends ReducerActionArgs<string[] | number[]> {
  key: string;
}

export type ActionTypes =
  | 'APPEND_RECORDS'
  | 'REMOVE_PROPS'
  | 'SET_PROPS'
  | 'UPDATE_PROPS'
  | 'UPDATE_PROPS_BY_KEY'
  | 'REMOVE_RECORDS_BY_KEY'
  | 'PURGE_STORE'
  | 'RESET_REDUCER'
  | 'RESET_STORE'
  | 'USER_AUTHENTICATED'
  | 'USER_UNAUTHENTICATED'
  | 'SIGN_IN'
  | 'SIGN_UP'
  | 'REFRESH_TOKEN'
  | 'INIT_APP'
  | 'STARTUP_APP'
  | 'SHUTDOWN_APP'
  | 'APP_READY'
  | 'NETWORK_CONNECTED'
  | 'NETWORK_DISCONNECTED'
  | 'NETWORK_ONLINE'
  | 'NETWORK_OFFLINE'
  | 'CONNECT_WEBSOCKET'
  | 'SEND_WEBSOCKET_MESSAGE';
