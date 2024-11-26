/**
 * Problem 20: Valid Parentheses
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
 * determine if the input string is valid. The string is valid if all open brackets
 * are closed in the correct order.
 *
 * Approach:
 * - Use a stack to track opening brackets
 * - Map closing brackets to their corresponding opening brackets
 * - For each closing bracket, check if it matches the last opening bracket
 * - String is valid if all brackets match and stack is empty at end
 *
 * Time Complexity: O(n) where n is the length of the string
 * Space Complexity: O(n) for the stack in worst case
 */
export function isValid(s: string): boolean {
  const stack: string[] = [];
  const pairs: { [key: string]: string } = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  for (const char of s) {
    if (!pairs[char]) {
      // Opening bracket
      stack.push(char);
    } else {
      // Closing bracket
      if (stack.pop() !== pairs[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}
