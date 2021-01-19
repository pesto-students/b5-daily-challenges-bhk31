import { count, repeat, cycle } from './iterInfinite';

describe('repeat', () => {
  it('Execution of repeat with limit 3', () => {
    const iterable = repeat(10, 3);
    expect([...iterable]).toEqual([10, 10, 10]);
  });
});

describe('cycle', () => {
  it('Execution of cycle with limit 2', () => {
    const iterable = cycle('ABCD', 2);
    expect([...iterable]).toEqual(['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D']);
  });
});
