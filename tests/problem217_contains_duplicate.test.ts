import { containsDuplicate } from '../src/problems/problem217_contains_duplicate';

describe('Contains Duplicate', () => {
  test('returns true when array contains duplicates', () => {
    expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
  });

  test('returns false when array has no duplicates', () => {
    expect(containsDuplicate([1, 2, 3, 4])).toBe(false);
  });

  test('returns false for empty array', () => {
    expect(containsDuplicate([])).toBe(false);
  });

  test('returns true for array with multiple duplicates', () => {
    expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true);
  });
});
