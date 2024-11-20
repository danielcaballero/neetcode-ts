/**
 * Problem 347: Top K Frequent Elements
 * Given an integer array nums and an integer k, return the k most frequent elements.
 * You may return the answer in any order.
 *
 * Approach:
 * - Use a map to count frequencies of each number
 * - Create buckets where index represents frequency and value is array of numbers with that frequency
 * - Collect k most frequent elements by iterating buckets from highest frequency
 *
 * Time Complexity: O(n) where n is length of input array
 * Space Complexity: O(n) for frequency map and buckets
 */
export function topKFrequent(nums: number[], k: number): number[] {
  // Step 1: Count frequencies
  const freqMap = new Map<number, number>();
  for (const num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  // Step 2: Create buckets (index = frequency, value = array of nums with that frequency)
  const buckets: number[][] = Array(nums.length + 1)
    .fill(null)
    .map(() => []);
  for (const [num, freq] of freqMap) {
    buckets[freq].push(num);
  }

  // Step 3: Collect k most frequent elements
  const result: number[] = [];
  for (let freq = buckets.length - 1; freq >= 0 && result.length < k; freq--) {
    result.push(...buckets[freq]);
  }

  return result.slice(0, k);
}
