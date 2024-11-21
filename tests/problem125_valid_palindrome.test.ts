import { isPalindrome } from '../src/problems/problem125_valid_palindrome';

describe('Valid Palindrome', () => {
  test('handles basic palindrome with spaces and punctuation', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
  });

  test('returns false for non-palindromes', () => {
    expect(isPalindrome('race a car')).toBe(false);
  });

  test('handles empty string', () => {
    expect(isPalindrome('')).toBe(true);
  });

  test('handles single character', () => {
    expect(isPalindrome('a')).toBe(true);
  });

  test('handles string with only non-alphanumeric characters', () => {
    expect(isPalindrome(' ')).toBe(true);
  });

  test('handles alphanumeric palindrome with mixed cases', () => {
    expect(isPalindrome('Ab1ba')).toBe(true);
  });

  test('handles non-palindrome with mixed cases and numbers', () => {
    expect(isPalindrome('Ab1ca')).toBe(false);
  });
});
