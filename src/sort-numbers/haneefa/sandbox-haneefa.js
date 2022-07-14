const sortingNumbers = (array = []) => {
  const newArray = [...array];
  newArray.sort((a, b) => {
    return a - b;
  });

  return newArray;
};
