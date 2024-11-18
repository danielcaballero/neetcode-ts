/**
 * Problem 242: Valid Anagram
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 * An anagram is a word formed by rearranging the letters of another word.
 *
 * Approach:
 * - First check if strings are same length, if not return false
 * - Use array of size 26 to track character frequency differences
 * - Increment count for chars in s, decrement for chars in t
 * - Check if all counts are zero at the end
 *
 * Time Complexity: O(n) - We iterate through each string once
 * Space Complexity: O(1) - We use a fixed size array of 26 characters
 */
export function isAnagram(s: string, t: string): boolean {
  // Quick length check
  if (s.length !== t.length) {
    return false;
  }

  // Create array to store character counts (26 lowercase letters)
  const charCount = new Array(26).fill(0);

  // Count characters from first string (increment)
  // and second string (decrement) simultaneously
  for (let i = 0; i < s.length; i++) {
    charCount[s.charCodeAt(i) - 97]++;
    charCount[t.charCodeAt(i) - 97]--;
  }

  // Check if all counts are zero
  return charCount.every((count) => count === 0);
}
