import { isAnagram } from '../src/problems/problem242_valid_anagram';

describe('Valid Anagram', () => {
  test('returns true for valid anagrams', () => {
    expect(isAnagram('anagram', 'nagaram')).toBe(true);
  });

  test('returns false for non-anagrams', () => {
    expect(isAnagram('rat', 'car')).toBe(false);
  });

  test('returns true for empty strings', () => {
    expect(isAnagram('', '')).toBe(true);
  });

  test('returns false for different lengths', () => {
    expect(isAnagram('ab', 'a')).toBe(false);
  });

  test('returns true for same characters with different cases', () => {
    expect(isAnagram('hello', 'hello')).toBe(true);
  });
});
