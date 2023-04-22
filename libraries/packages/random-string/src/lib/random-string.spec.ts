import { randomString } from './random-string';

describe('randomString', () => {
  it('should work', () => {
    expect(randomString()).toEqual('random-string');
  });
});
