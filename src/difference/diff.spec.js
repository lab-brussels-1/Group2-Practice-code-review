// functions

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

// test

describe('Difference between two arrays', () => {
  it('it should return [1] when [[1,2],[2,8]] are passed', () => {
    expect(
      findDifference([
        [1, 2],
        [2, 8],
      ]),
    ).toEqual([1]);
  });
  it('it should return [5,6] when [[5,4,6],[0,12,4]] are passed', () => {
    expect(
      findDifference([
        [5, 4, 6],
        [0, 12, 4],
      ]),
    ).toEqual([5, 6]);
  });
  it('it should return [10,20,5] when [[10,9,20,-2,5,0],[-2,0,9,18]] are passed', () => {
    expect(
      findDifference([
        [10, 9, 20, -2, 5, 0],
        [-2, 0, 9, 18],
      ]),
    ).toEqual([10, 20, 5]);
  });
});

// Edge case- same two sets and disjoint arrays, empty arrays
describe('Edge cases for difference between two arrays', () => {
  it('it should return [] when [[1,2,3],[1,2,3]] are passed', () => {
    expect(
      findDifference([
        [1, 2, 3],
        [1, 2, 3],
      ]),
    ).toEqual([]);
  });
  it('it should return [4,5,6] when [[4,5,6],[7,8,9]] are passed', () => {
    expect(
      findDifference([
        [4, 5, 6],
        [7, 8, 9],
      ]),
    ).toEqual([4, 5, 6]);
  });
  it('it should return [] when [[],[10,20]] are passed', () => {
    expect(findDifference([[], [10, 20]])).toEqual([]);
  });
  it('it should return [30,40] when [[30,40],[]] are passed', () => {
    expect(findDifference([[30, 40], []])).toEqual([30, 40]);
  });
  it('it should return [] when [[],[]] are passed', () => {
    expect(findDifference([[], []])).toEqual([]);
  });
});
