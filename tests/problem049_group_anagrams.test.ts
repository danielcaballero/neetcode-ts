import { groupAnagrams } from '../src/problems/problem049_group_anagrams';

describe('Group Anagrams', () => {
  test('groups basic anagrams correctly', () => {
    const input = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
    const output = groupAnagrams(input);

    // Sort each group and the result array for consistent comparison
    const sortedOutput = output
      .map((group) => group.sort())
      .sort((a, b) => a[0].localeCompare(b[0]));

    expect(sortedOutput).toEqual([
      ['ate', 'eat', 'tea'],
      ['bat'],
      ['nat', 'tan'],
    ]);
  });

  test('handles empty input array', () => {
    expect(groupAnagrams([])).toEqual([]);
  });

  test('handles single string', () => {
    expect(groupAnagrams(['a'])).toEqual([['a']]);
  });

  test('groups identical strings together', () => {
    expect(groupAnagrams(['hello', 'hello'])).toEqual([['hello', 'hello']]);
  });
});
