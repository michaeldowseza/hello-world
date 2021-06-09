describe('Hello world', () => {
  test('should print out hello world', async () => {
    const spy = jest.spyOn(global.console, 'log');
    await import('../src/index');

    expect(spy).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenLastCalledWith('Hello world');
  });
});
