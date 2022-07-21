// if there are duplicate arrays within an array it should be removed.
// use a for loop where the 1st index in the array is iterated over the 0 index array elements.
// iterate if there is are common elements.
// If included  remove it if not continue till the array length.

// changing the array to set to remove duplicate elements and convert it back to array.
// set only allows unique elements.

const arraytest = [
  [1, 2, 1],
  [2, 3, 4],
];

const removeDuplicates = (arr1) => {
  let array2D = arr1;
  const setArr1 = new Set(array2D);
  array2D = Array.from(setArr1);
  return array2D;
};

const findDifference = (arr1) => {
  const array2D = arr1;
  array2D[0] = removeDuplicates(array2D[0]);
  array2D[1] = removeDuplicates(array2D[1]);
  for (let i = 0; i < array2D[1].length; i++) {
    if (array2D[0].includes(arr1[1][i])) {
      // find the indexOf the common element found
      const index = array2D[0].indexOf(array2D[1][i]);
      // remove the element found
      array2D[0].splice(index, 1);
    }
  }
  return array2D[0];
};

findDifference(arraytest);
