import isArray from 'lodash/isArray';

/**
 *
 * Usage: Use 'initialState' object when calling this function instead of the
 * usual 'state' object.
 */
export function resetReducer(initialState: object | any[]): object {
  return !isArray(initialState) ? { ...initialState } : [...initialState];
}
