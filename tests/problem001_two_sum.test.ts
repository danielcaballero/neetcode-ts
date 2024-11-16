// tests/problem001_two_sum.test.ts

import { twoSum } from '../src/problems/problem001_two_sum';

describe('Two Sum', () => {
  test('Example test case', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  test('Another test case', () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  });
});
