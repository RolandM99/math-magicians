import operate from '../operate';

describe('tests for all operations we can make', () => {
  test('for 9 + 1 it expects to be 10', () => {
    expect(operate(9, 1, '+')).toEqual('10');
  });
  test('for 4 - 6 it expects to be -2', () => {
    expect(operate(4, 6, '-')).toEqual('-2');
  });
  test('for 4 x 0 it expects to be 0', () => {
    expect(operate(4, 0, 'x')).toEqual('0');
  });
  test('for 1 ÷ 1 it expects to be 1', () => {
    expect(operate(1, 1, '÷')).toEqual('1');
  });
});
