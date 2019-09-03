export function testArrayMethod(array: any[], methodFn: Function, deepResult = true) {
  const firstShallowCopy = [...array];
  const secondShallowCopy = [...array];

  return (...args: any[]) => {
    const methodResult = methodFn(firstShallowCopy, ...args);
    const nativeResult = secondShallowCopy[methodFn.name](...args);

    if (!deepResult) {
      return expect(nativeResult).toBe(methodResult);
    }

    return expect(nativeResult).toEqual(methodResult);
  };
}
