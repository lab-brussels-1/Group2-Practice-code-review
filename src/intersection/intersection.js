export const intersection = (array1 = [], array2 = []) => {
  const intersectionResult = new Set(array2);
  return [...new Set(array1)].filter((value) => intersectionResult.has(value));
};
