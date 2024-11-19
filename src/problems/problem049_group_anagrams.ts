/**
 * Problem 49: Group Anagrams
 * Given an array of strings strs, group the anagrams together. You can return the answer in any order.
 * An anagram is a word formed by rearranging the letters of another word.
 *
 * Approach:
 * - Create a map to store sorted character counts as keys and arrays of strings as values
 * - For each string, create a character count array (26 letters)
 * - Use the count array as a key to group anagrams
 * - Return all groups as a result
 *
 * Time Complexity: O(n * k) where n is number of strings and k is max string length
 * Space Complexity: O(n * k) to store all strings in the groups
 */
export function groupAnagrams(strs: string[]): string[][] {
  const groups: { [key: string]: string[] } = {};

  for (const str of strs) {
    const count = new Array(26).fill(0);

    // Count characters in current string
    for (const char of str) {
      count[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    // Create key from character counts
    const key = count.join(',');

    // Add string to appropriate group
    if (groups[key]) {
      groups[key].push(str);
    } else {
      groups[key] = [str];
    }
  }

  return Object.values(groups);
}
