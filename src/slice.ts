import { push } from './push';

export function slice<T>(array: T[], startIndex: number = 0, endIndex: number = array.length) {
  const result = [];

  for (let index = startIndex; index < endIndex; index += 1) {
    const value = array[index];

    if (index < array.length) {
      push(result, value);
    }
  }

  return result;
}
