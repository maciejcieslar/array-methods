import { reduce } from './reduce';
import { concat } from './concat';

export function flat<T>(array: T | T[], depth = 0) {
  if (depth < 1 || !Array.isArray(array)) {
    return array;
  }

  return reduce<T, T[]>(
    array,
    (result, current) => {
      return concat(result, flat<T>(current, depth - 1));
    },
    [],
  );
}

// [1, 2, 3, [4, 5, [6, 7, [8]]]].flat(2); // -> [1, 2, 3, 4, 5, 6, 7, [8]]
