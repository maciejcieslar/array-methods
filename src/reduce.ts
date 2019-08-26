type ReduceCallback<T, N> = (acc: N, value: T, index: number, array: T[]) => N;

export function reduce<T, N>(array: T[], callback: ReduceCallback<T, N>, initValue: any): N {
  const { length } = array;

  let acc = initValue;
  let startAtIndex = 0;

  if (initValue === undefined) {
    acc = array[0];
    startAtIndex = 1;
  }

  for (let index = startAtIndex; index < length; index += 1) {
    const value = array[index];

    acc = callback(acc, value, index, array);
  }

  return acc;
}
