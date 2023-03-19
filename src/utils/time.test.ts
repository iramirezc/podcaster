import { isWithin24Hours, T24Hours } from './time';

describe('Time Utils', () => {
  describe('isWithin24Hours', () => {
    test('returns true if time is less than 24 hours', () => {
      expect(isWithin24Hours(Date.now())).toBe(true);
    });

    test('returns true if time is exactly 24 hours', () => {
      expect(isWithin24Hours(Date.now() + T24Hours)).toBe(true);
    });

    test('returns false if time is greater that 24 hours', () => {
      expect(isWithin24Hours(Date.now() + T24Hours + 1)).toBe(false);
    });
  });
});
