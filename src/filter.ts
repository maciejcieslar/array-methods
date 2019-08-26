import { push } from './push';

type FilterCallback<T> = (value: T, index: number, array: T[]) => boolean;

export function filter<T>(array: T[], callback: FilterCallback<T>) {
  const result = [];

  const { length } = array;

  for (let index = 0; index < length; index += 1) {
    const value = array[index];

    if (callback(value, index, array)) {
      // TODO: well which is it?
      push(result, value);
    }
  }

  return result;
}
