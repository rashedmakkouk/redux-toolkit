import { RemoveRecordsByAction, RemoveRecordsByArgs } from '../redux-toolkit';
import { actionTypes } from '../common';

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
