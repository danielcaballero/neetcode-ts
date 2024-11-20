import { topKFrequent } from '../src/problems/problem347_top_k_frequent';

describe('Top K Frequent Elements (Bucket Sort)', () => {
  test('basic example', () => {
    // Arrange
    const nums = [1, 1, 1, 2, 2, 3];
    const k = 2;

    // Act
    const result = topKFrequent(nums, k);

    // Assert
    expect(result.sort()).toEqual([1, 2]);
  });

  test('with equal frequencies', () => {
    const nums = [1, 1, 2, 2, 3, 3];
    const k = 2;
    const result = topKFrequent(nums, k);
    expect(result.length).toBe(2);
    // Any two numbers are valid since all have same frequency
    expect([1, 2, 3]).toContain(result[0]);
    expect([1, 2, 3]).toContain(result[1]);
  });
});
