export function pop<T>(array: T[]) {
  const value = array[array.length - 1];

  array.length = array.length - 1;

  return value;
}
