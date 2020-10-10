import isArray from 'lodash/isArray';
export function resetReducer(initialState: object | any[]): object {
  return !isArray(initialState) ? { ...initialState } : [...initialState];
}
