import { concat } from './concat';

export function unshift<T>(array: T[], ...values: T[]) {
  const mergedArrays = concat(values, ...array);
  const { length: mergedArraysLength } = mergedArrays;

  for (let index = 0; index < mergedArraysLength; index += 1) {
    const value = mergedArrays[index];

    array[index] = value;
  }

  return array.length;
}
