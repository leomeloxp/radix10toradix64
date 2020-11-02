import Radix10ToRadix64 from '../src/index';

describe('Radix10ToRadix64', () => {
  const converter = new Radix10ToRadix64();
  test('should be able to instantiate class', () => {
    expect(converter).toBeInstanceOf(Radix10ToRadix64);
  });
  test('should encode positive numbers correctly', () => {
    expect(converter.toRadix64(0)).toEqual('0');
    expect(converter.toRadix64(7)).toEqual('7');
    expect(converter.toRadix64(10)).toEqual('A');
    expect(converter.toRadix64(4096)).toEqual('100');
    expect(converter.toRadix64(62831853071)).toEqual('wX4VuF');
    expect(converter.toRadix64(Number.MAX_SAFE_INTEGER / 2)).toEqual('F________');
    expect(converter.toRadix64(Number.MAX_SAFE_INTEGER)).toEqual('V________');
  });
  test('should not encode invalid number types', () => {
    expect(() => converter.toRadix64(-7)).toThrowError('Cannot represent negative inputs.');
    expect(() => converter.toRadix64(Number.NaN)).toThrowError('not valid');
    expect(() => converter.toRadix64(Number.MAX_SAFE_INTEGER + 1)).toThrow('too large');
    expect(() => converter.toRadix64(Number.MAX_VALUE)).toThrow('too large');
  });
  test('should decode valid strings back to their radix 10 value', () => {
    expect(converter.toRadix10('0')).toEqual(0);
    expect(converter.toRadix10('8')).toEqual(8);
    expect(converter.toRadix10('11')).toEqual(65);
    expect(converter.toRadix10('1030')).toEqual(262336);
    expect(converter.toRadix10('4096')).toEqual(1049158);
    expect(converter.toRadix10('628318530')).toEqual(1698198949220544);
    expect(converter.toRadix10('F________')).toEqual(4503599627370495);
  });
  test('should not decode invalid strings', () => {
    expect(() => converter.toRadix10('犬が好きです')).toThrowError('Invalid string');
    expect(() => converter.toRadix10('This_should_throw')).toThrowError(
      'Number being decoded exceeds max safe integer.',
    );
  });
});
