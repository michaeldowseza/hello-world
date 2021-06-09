import hello from '../src/index';

describe('Hello world', () => {
  test('should print out hello world', async () => {
    const spy = jest.spyOn(global.console, 'log');
    hello();

    expect(spy).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenLastCalledWith('Hello world');
  });
});
