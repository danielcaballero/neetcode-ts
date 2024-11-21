/**
 * Problem 125: Valid Palindrome
 * Given a string s, return true if it is a palindrome, considering only alphanumeric characters
 * and ignoring cases.
 *
 * Approach:
 * - Use two pointers (left and right) to compare characters
 * - Skip non-alphanumeric characters
 * - Compare characters in a case-insensitive way
 *
 * Time Complexity: O(n) where n is the length of the string
 * Space Complexity: O(1) as we only use two pointers
 */
export function isPalindrome(s: string): boolean {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    // Skip non-alphanumeric characters from left
    while (left < right && !isAlphanumeric(s[left])) {
      left++;
    }

    // Skip non-alphanumeric characters from right
    while (left < right && !isAlphanumeric(s[right])) {
      right--;
    }

    // Compare characters in lowercase
    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

function isAlphanumeric(char: string): boolean {
  return /[a-zA-Z0-9]/.test(char);
}
