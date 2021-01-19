import { count, repeat, cycle } from './iterInfinite';

describe('count', () => {
  it('if end value is greater than start value it produces values', () => {
    const iterable = count(10);
    expect([...iterable]).toEqual([10, 11, 12, 13]);
  });
});
