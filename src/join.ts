import { reduce } from './reduce';

export function join<T>(array: T[], joinWith: string) {
  return reduce(
    array,
    (result, current, index) => {
      if (index === 0) {
        return current;
      }

      return `${result}${joinWith}${current}`;
    },
    '',
  );
}
