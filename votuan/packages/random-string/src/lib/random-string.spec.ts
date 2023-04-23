import { randomString } from './random-string';

describe('randomString', () => {
  it('should work', () => {
    expect(randomString(10)).toBeInstanceOf(String);
  });
});
