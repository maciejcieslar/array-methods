import { slice } from './slice';

export function splice<T>(array: T[], insertAtIndex: number, removeNumberOfElements: number, ...values: T[]) {
  const firstPart = slice(array, 0, insertAtIndex);
  const secondPart = slice(array, insertAtIndex + removeNumberOfElements);

  const removedElements = slice(array, insertAtIndex, insertAtIndex + removeNumberOfElements);

  const joinedParts = firstPart.concat(values, secondPart);
  const { length: joinedPartsLength } = joinedParts;

  for (let index = 0; index < joinedPartsLength; index += 1) {
    array[index] = joinedParts[index];
  }

  return removedElements;
}
