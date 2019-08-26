type ForEachCallback<T> = (value: T, index: number, array: T[]) => void;

export function forEach<T>(array: T[], callback: ForEachCallback<T>) {
  const { length } = array;

  for (let index = 0; index < length; index += 1) {
    const value = array[index];

    callback(value, index, array);
  }
}
