/* eslint sort-keys: off */

/** Typings */
import { ActionTypes } from '../types';

export const actionTypes: { [key in ActionTypes]: string } = {
  /** Reducer */
  APPEND_RECORDS: 'reducer/APPEND_RECORDS',
  REMOVE_PROPS: 'reducer/REMOVE_PROPS',
  SET_PROPS: 'reducer/SET_PROPS',
  UPDATE_PROPS: 'reducer/UPDATE_PROPS',
  UPDATE_PROPS_BY_KEY: 'reducer/UPDATE_PROPS_BY_KEY',
  REMOVE_RECORDS_BY_KEY: 'reducer/REMOVE_RECORDS_BY_KEY',
  /** Store */
  RESET_STORE: 'store/RESET',
  RESET_REDUCER: 'store/RESET_REDUCER',
  PURGE_STORE: 'persist/PURGE',
  /** User */
  USER_AUTHENTICATED: 'user/AUTHENTICATED',
  USER_UNAUTHENTICATED: 'user/UNAUTHENTICATED',
  /** Authentication */
  SIGN_IN: 'auth/SIGN_IN',
  SIGN_UP: 'auth/SIGN_UP',
  REFRESH_TOKEN: 'auth/REFRESH_TOKEN',
  /** App */
  INIT_APP: 'app/INIT',
  STARTUP_APP: 'app/STARTUP',
  SHUTDOWN_APP: 'app/SHUTDOWN',
  APP_READY: 'app/READY',
  /** Network */
  NETWORK_CONNECTED: 'network/CONNECTED',
  NETWORK_DISCONNECTED: 'network/DISCONNECTED',
  NETWORK_ONLINE: 'network/ONLINE',
  NETWORK_OFFLINE: 'network/OFFLINE',
  /** Websocket */
  CONNECT_WEBSOCKET: 'websocket/CONNECT',
  SEND_WEBSOCKET_MESSAGE: 'websocket/SEND_MESSAGE',
};
