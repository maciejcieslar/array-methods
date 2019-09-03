type SomeCallback<T> = (value: T, index: number, array: T[]) => boolean;

export function some<T>(array: T[], callback: SomeCallback<T>) {
  const { length } = array;

  for (let index = 0; index < length; index += 1) {
    const value = array[index];

    if (callback(value, index, array)) {
      return true;
    }
  }

  return false;
}
