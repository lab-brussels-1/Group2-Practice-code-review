export const intersection = (array = [], values = []) => {
  const intersectionResult = array.filter((x) => values.includes(x));
  return intersectionResult;
};
