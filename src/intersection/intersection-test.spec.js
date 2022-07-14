import { intersection } from './intersection.js';

describe('Intersection of 2 arrays', () => {
  it('[2, 1, 2, 1], [2, 3]--> [2]', () => {
    expect(intersection([2, 1, 2, 1], [2, 3])).toEqual([2]);
  });
  it('[2, 3, 4, 5, 6], [3, 4, 6, 2]--> [2, 3, 4, 6]', () => {
    expect(intersection([2, 3, 4, 5, 6], [3, 4, 6, 2])).toEqual([2, 3, 4, 6]);
  });
  it('when no argument passed should apply default value', () => {
    expect(intersection()).toEqual([]);
  });
  it('[naza, daniel], [daniel]--> [daniel]', () => {
    expect(intersection(['naza', 'daniel', 'naza'], ['daniel'])).toEqual([
      'daniel',
    ]);
  });
  it('[a,b,c], [a,b,c,d,e,a]--> [null]', () => {
    expect(
      intersection(['a', 'b', 'c'], ['a', 'b', 'c', 'd', 'e', 'a']),
    ).toEqual(['a', 'b', 'c']);
  });
});
