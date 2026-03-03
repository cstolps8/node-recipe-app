const { asyncHandler } = require('../src/utils/errorHandler');

describe('asyncHandler', () => {
  test('calls the wrapped function with req, res, next', async () => {
    const fn = jest.fn().mockResolvedValue(undefined);
    const handler = asyncHandler(fn);
    const req = {};
    const res = {};
    const next = jest.fn();

    await handler(req, res, next);

    expect(fn).toHaveBeenCalledWith(req, res, next);
    expect(next).not.toHaveBeenCalled();
  });

  test('calls next with the error when the async function throws', async () => {
    const error = new Error('Test error');
    const fn = jest.fn().mockRejectedValue(error);
    const handler = asyncHandler(fn);
    const req = {};
    const res = {};
    const next = jest.fn();

    await handler(req, res, next);

    expect(next).toHaveBeenCalledWith(error);
  });
});
