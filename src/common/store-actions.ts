import isArray from 'lodash/isArray';
import { AnyAction } from 'redux';

export function resetReducerState(initialState: object | Array<any>): object {
  return !isArray(initialState) ? { ...initialState } : [...initialState];
}

export function resetReducerSubState(
  state: object,
  initialSubState: object
): object {
  return {
    ...state,
    ...initialSubState,
  };
}

export function setPropsFolder(state: object, action: AnyAction): object {
  const { payload } = action;

  return { ...payload };
}

export function setPropsSubFolder(state: object, action: AnyAction): object {
  const { payload, subFolder } = action;

  return {
    ...state,
    [subFolder]: Object.assign({}, { ...payload }),
  };
}

/**
 * Update object key/value pairs.
 */
export function updatePropsFolder(state: object, action: AnyAction): object {
  const { payload } = action;

  return { ...state, ...payload };
}

export function updatePropsSubFolder(state: object, action: AnyAction): object {
  const { payload, subFolder } = action;

  return {
    ...state,
    [subFolder]: { ...(state[subFolder] || {}), ...payload },
  };
}

/**
 * @param payload - Object of objects with `id` as key.
 */
function updateByIdState(state: object, payload: object): object {
  const nextState = { ...state };

  /** key === 'id' */
  Object.keys(payload).map((key): void => {
    nextState[key] = { ...(nextState[key] || {}), ...payload[key] };
  });

  return nextState;
}

/**
 * Update nested objects; useful with normalized payloads.
 */
export function updateByIdFolder(state: object, action: AnyAction): object {
  const { payload } = action;

  return updateByIdState(state, payload);
}

export function updateByIdSubFolder(state: object, action: AnyAction): object {
  const { payload, subFolder } = action;

  return {
    ...state,
    [subFolder]: updateByIdState(state[subFolder], payload),
  };
}

export function resetPropFolder(
  state: object,
  action: AnyAction,
  initialState: object
): object {
  return {
    ...state,
    [action.key]: initialState[action.key],
  };
}

export function resetPropSubFolder(
  state: object,
  action: AnyAction,
  initialState: object
): object {
  return {
    ...state,
    [action.subFolder]: {
      ...state[action.subFolder],
      [action.key]: initialState[action.subFolder][action.key],
    },
  };
}

function removePropsState(state: object, key: string | string[]): object {
  const nextState = { ...state };

  const keys: string[] = !isArray(key) ? [key] : key;

  keys.map((k): void => {
    delete nextState[k];
  });

  return nextState;
}

export function removePropsFolder(state: object, action: AnyAction): object {
  const { key } = action;

  return removePropsState(state, key as string | string[]);
}

export function removePropsSubFolder(state: object, action: AnyAction): object {
  const { key, subFolder } = action;

  return {
    ...state,
    [subFolder]: removePropsState(state[subFolder], key),
  };
}

export function setRecordsFolder(state: any[], action: AnyAction): object {
  return [...action.payload];
}

export function setRecordsSubFolder(state: object, action: AnyAction): object {
  return {
    ...state,
    [action.subFolder]: [...action.payload],
  };
}

export function appendRecordsFolder(
  state: object[],
  action: AnyAction
): object {
  return [...state, ...action.payload];
}

export function appendRecordsSubFolder(
  state: object,
  action: AnyAction
): object {
  return {
    ...state,
    [action.subFolder]: [...(state[action.subFolder] || []), ...action.payload],
  };
}

export function prependRecordsFolder(
  state: object[],
  action: AnyAction
): object {
  return [...action.payload, ...state];
}

export function prependRecordsSubFolder(
  state: object,
  action: AnyAction
): object {
  return {
    ...state,
    [action.subFolder]: [...action.payload, ...(state[action.subFolder] || [])],
  };
}

function removeRecordsByState(
  state: any[],
  key: string,
  payload: any[]
): any[] {
  if (!state || !state.length) {
    return [];
  }

  return state.filter((record: any): boolean => !payload.includes(record[key]));
}

export function removeRecordsByFolder(
  state: object[],
  action: AnyAction
): object {
  return removeRecordsByState(state, action.key, action.payload);
}

export function removeRecordsBySubFolder(
  state: object,
  action: AnyAction
): object {
  return {
    ...state,
    [action.subFolder]: removeRecordsByState(
      state[action.subFolder],
      action.key,
      action.payload
    ),
  };
}
