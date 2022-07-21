// if there are duplicate arrays within an array it should be removed.
// use a for loop where the 1st index in the array is iterated over the 0 index array elements.
// iterate if there is are common elements.
// If included  remove it if not continue till the array length.

const array2D = [
  [1, 2, 1],
  [2, 8],
];

let arr1 = [];
// changing the array to set to remove duplicate elements and convert it back to array.
// set only allows unique elements.
const removeDuplicates = (arr1) => {
  const setArr1 = new Set(arr1);
  arr1 = Array.from(setArr1);
  return arr1;
};

const findDifference = (arr1) => {
  arr1[0] = removeDuplicates(arr1[0]);
  arr1[1] = removeDuplicates(arr1[1]);
  const firstArr = arr1[0];
  for (let i = 0; i < arr1[1].length; i++) {
    if (firstArr.includes(arr1[1][i])) {
      // find the indexOf the common element found
      const index = firstArr.indexOf(arr1[1][i]);
      // remove the element found
      firstArr.splice(index, 1);
    }
  }
  return firstArr;
};
