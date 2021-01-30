/** Utilities */
import { actionTypes } from '../common';

/** Typings */
import { RemoveRecordsByAction, RemoveRecordsByArgs } from '../types';

const { REMOVE_RECORDS_BY } = actionTypes;

/**
 * Removes array records by supplied `key` in `payload` value.
 */
export function removeRecordsBy(
  args: RemoveRecordsByArgs
): RemoveRecordsByAction {
  return {
    ...args,
    type: REMOVE_RECORDS_BY,
  };
}
