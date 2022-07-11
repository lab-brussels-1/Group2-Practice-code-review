/** ..........
 * Converts a nested array into a single array with no nesting.
 *
 * It returns a new array and there are no side-effects.
 *
 * @param {Array} [array=[]] - The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * deepFlat([1, [2, [3, [4]], 5]]);
 * // -> [1, 2, 3, 4, 5]
 *
 * @example
 *
 * deepFlat(['a', ['b', [['c'], ['d']], 'e']]);
 * // -> ['a', 'b', 'c', 'd', 'e']
 */

const deepFlat = (array = []) => {
  return array.flat(Infinity);
};

for (const solution of [deepFlat]) {
  describe(`${solution.name}: _`, () => {
    describe('_', () => {
      it('_', () => {});
    });
    it('reverse strings of array', () => {
      expect(solution([[1], 2, 3, 4, [5]])).toEqual([1, 2, 3, 4, 5]);
    });
    it('reverse strings of array', () => {
      expect(solution([['123'], ['456']])).toEqual(['123', '456']);
    });
    it('reverse strings of array', () => {
      expect(solution([['nursultan'], ['is'], ['my son']])).toEqual([
        'nursultan',
        'is',
        'my son',
      ]);
    });
    it('reverse strings of array', () => {
      expect(solution([['hello'], 'b', ['c'], ['d'], 'e'])).toEqual([
        'hello',
        'b',
        'c',
        'd',
        'e',
      ]);
    });
    it('reverse strings of array', () => {
      expect(
        solution([
          [1, 2, 3],
          [
            [4, 5, 6],
            [7, 8, 9],
            [
              [10, 11, 12],
              [13, 14, 15],
            ],
          ],
          16,
          17,
        ]),
      ).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]);
    });
  });
}
