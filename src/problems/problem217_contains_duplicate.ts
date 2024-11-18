/**
 * Problem 217: Contains Duplicate
 * Given an integer array nums, return true if any value appears at least twice in the array,
 * and return false if every element is distinct.
 *
 * Approach 1 (Current - Set):
 * - Use a Set to track seen numbers
 * - For each number, check if it's already in the Set
 * - If found, return true; otherwise add to Set and continue
 * Time: O(n), Space: O(n)
 *
 * Approach 2 (Alternative - Sorting):
 * - Sort the array in-place
 * - Check adjacent elements for duplicates
 * Time: O(n log n), Space: O(1)
 *
 * Approach 3 (One-liner using Set):
 * - Compare original array length with Set size
 * Time: O(n), Space: O(n)
 */
export function containsDuplicate(nums: number[]): boolean {
  // Approach 1: Using Set (most efficient for general case)
  const seen = new Set<number>();
  for (const num of nums) {
    if (seen.has(num)) return true;
    seen.add(num);
  }
  return false;

  // Approach 2: Using Sort (better space complexity but slower)
  // nums.sort((a, b) => a - b);
  // for (let i = 1; i < nums.length; i++) {
  //     if (nums[i] === nums[i-1]) return true;
  // }
  // return false;

  // Approach 3: One-liner using Set
  // return nums.length !== new Set(nums).size;
}
