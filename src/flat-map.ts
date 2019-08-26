import { map } from './map';
import { flat } from './flat';

type FlatMapCallback<T> = (value: T, index: number, array: T[]) => T[];

export function flatMap<T>(array: T[], callback: FlatMapCallback<T>) {
  return flat(map(array, callback), 1);
}

// [1, 2, 3].flatMap(value => [value, value, value]); // [1, 1, 1, 2, 2, 2, 3, 3, 3]
