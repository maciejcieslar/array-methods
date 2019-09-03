import { push } from './push';

export function concat<T>(array: T[], ...values: unknown[]) {
  const result = [...array];
  const { length } = values;

  for (let index = 0; index < length; index += 1) {
    const value = values[index];

    if (Array.isArray(value)) {
      push(result, ...value);
    } else {
      push(result, value);
    }
  }

  return result;
}
