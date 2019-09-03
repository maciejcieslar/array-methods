function mutatesArray(firstArray: unknown[], secondArray: unknown[]) {
  if (firstArray.length !== secondArray.length) {
    return true;
  }

  for (let index = 0; index < firstArray.length; index += 1) {
    if (firstArray[index] !== secondArray[index]) {
      return true;
    }
  }

  return false;
}

export function logOperation<T>(operationName: string, array: T[], callback: (array: T[]) => unknown) {
  const input = [...array];
  const result = callback(array);

  console.log({
    operation: operationName,
    arrayBefore: input,
    arrayAfter: array,
    mutates: mutatesArray(input, array), // shallow check
    result,
  });
}
