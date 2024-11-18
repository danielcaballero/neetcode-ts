/**
 * Problem 1: Two Sum
 * Given an array of integers nums and an integer target, return indices of the two numbers
 * in the array such that they add up to target. You may assume that each input would have
 * exactly one solution, and you may not use the same element twice.
 *
 * Approach:
 * - Use a hash map to store complements (target - current number) and their indices
 * - For each number, check if its complement exists in the map
 * - If found, return both indices, otherwise add current number and index to map
 *
 * Time Complexity: O(n) - We traverse the array once
 * Space Complexity: O(n) - We store at most n elements in the hash map
 */
export function twoSum(nums: number[], target: number): number[] {
  // Map to store number -> index pairs
  const numMap = new Map<number, number>();

  // Iterate through array once
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    // Check if complement exists in map
    if (numMap.has(complement)) {
      return [numMap.get(complement)!, i];
    }

    // Add current number and index to map
    numMap.set(nums[i], i);
  }

  // No solution found (though problem guarantees one exists)
  return [];
}
