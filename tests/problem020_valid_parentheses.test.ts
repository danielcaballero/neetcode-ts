import { isValid } from '../src/problems/problem020_valid_parentheses';

describe('Valid Parentheses', () => {
  test('valid simple parentheses', () => {
    expect(isValid('()')).toBe(true);
  });

  test('valid mixed brackets', () => {
    expect(isValid('()[]{}')).toBe(true);
  });

  test('valid nested brackets', () => {
    expect(isValid('{[()]}')).toBe(true);
  });

  test('invalid closing bracket first', () => {
    expect(isValid(']')).toBe(false);
  });

  test('invalid mismatched brackets', () => {
    expect(isValid('([)]')).toBe(false);
  });

  test('invalid unclosed brackets', () => {
    expect(isValid('(((')).toBe(false);
  });

  test('empty string', () => {
    expect(isValid('')).toBe(true);
  });

  test('single opening bracket', () => {
    expect(isValid('(')).toBe(false);
  });

  test('complex nested valid brackets', () => {
    expect(isValid('({[]}){}')).toBe(true);
  });
});
