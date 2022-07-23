const splitObject = (testObject) => {
  const arr = [];
  const keys = Object.keys(testObject);
  keys.forEach((key) => {
    arr.push({ [key]: testObject[key] });
  });
  return arr;
};

// test

describe('splits object with respective key value pair and puts it in an array', () => {
  it('it should return [{a:1},{b:2},{c:3}] when {a:1, b:2, c:3} is passed', () => {
    expect(splitObject({ a: 1, b: 2, c: 3 })).toEqual([
      { a: 1 },
      { b: 2 },
      { c: 3 },
    ]);
  });
  it("it should return [{shewit: 'student'}, {Eyob: 'job seeker'}] when {shewit: 'student', Eyob: 'job seeker'} is passed", () => {
    expect(splitObject({ shewit: 'student', Eyob: 'job seeker' })).toEqual([
      { shewit: 'student' },
      { Eyob: 'job seeker' },
    ]);
  });
  it('it should return [{name:1.1},{number:2.2},{address:3.3}] when {name:1.1,number:2.2,address:3.3} is passed', () => {
    expect(splitObject({ name: 1.1, number: 2.2, address: 3.3 })).toEqual([
      { name: 1.1 },
      { number: 2.2 },
      { address: 3.3 },
    ]);
  });
});

// edge case

// it('it should return [{}] when {} is passed', () => {
//   expect(splitObject({})).toEqual([{}]);
// });
