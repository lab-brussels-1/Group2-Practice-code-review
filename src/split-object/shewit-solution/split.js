// function

const testObject = { a: 1, b: 2, c: 3 };

const splitObject = (testObject) => {
  const arr = [];
  const keys = Object.keys(testObject);
  keys.forEach((key) => {
    arr.push({ [key]: testObject[key] });
  });
  return arr;
};

splitObject(testObject);
