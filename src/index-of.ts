import { findIndex } from './find-index';

export function indexOf<T>(array: T[], searchedValue: T) {
  return findIndex(array, value => value === searchedValue);
}
