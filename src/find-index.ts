type FindIndexCallback<T> = (value: T, index: number, array: T[]) => boolean;

export function findIndex<T>(array: T[], callback: FindIndexCallback<T>) {
  const { length } = array;

  for (let index = 0; index < length; index += 1) {
    const value = array[index];

    if (callback(value, index, array)) {
      return index;
    }
  }

  return -1;
}
