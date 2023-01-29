import isArray from 'lodash/isArray';

/**
 *
 * Usage: Use 'initialState' object when calling this function instead of the
 * usual 'state' object.
 */
export function resetReducer(
  initialState: object | unknown[]
): object | unknown[] {
  return !isArray(initialState)
    ? { ...initialState }
    : [...(initialState as unknown[])];
}
