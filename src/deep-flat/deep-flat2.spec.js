import { deepFlat } from './deepflat.js';

for (const solution of [deepFlat]) {
  describe(`${solution.name}: _`, () => {
    describe('_', () => {
      it('_', () => {});
    });
    it('flattened nested arrays', () => {
      expect(solution([[1], 2, 3, 4, [5]])).toEqual([1, 2, 3, 4, 5]);
    });
    it('flattened nested arrays', () => {
      expect(solution([['123'], ['456']])).toEqual(['123', '456']);
    });
    it('flattened nested arrays', () => {
      expect(solution([['nursultan'], ['is'], ['my son']])).toEqual([
        'nursultan',
        'is',
        'my son',
      ]);
    });
    it('flattened nested arrays', () => {
      expect(solution([['hello'], 'b', ['c'], ['d'], 'e'])).toEqual([
        'hello',
        'b',
        'c',
        'd',
        'e',
      ]);
    });
    it('flattened nested arrays', () => {
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
