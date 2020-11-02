/**
 * Provides methods to convert a base 10 number to and from its base 64 equivalent (as string).
 *
 * Inspired by {@link https://stackoverflow.com/questions/6213227/fastest-way-to-convert-a-number-to-radix-64-in-javascript}
 *
 * @export
 * @class Radix10ToRadix64
 */
export default class Radix10ToRadix64 {
  /**
   * The set of characters to be used in the encoding/decoding process.
   *
   * @private
   * @memberof Radix10ToRadix64
   */
  private _digits: string = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_';

  /**
   * Turns a number into a custom base-64 encoded string.
   *
   * @see: This cannot handle negative numbers and only works on the integer part of the supplied input aaaaaaaaaa
   *
   * @param {number} input The number to be converted
   * @returns {string} The resulting radix 64 string
   * @memberof Radix10ToRadix64
   */
  public toRadix64(input: number): string {
    if (isNaN(input)) {
      throw new Error('Input is not valid');
    }

    if (input > Number.MAX_SAFE_INTEGER) {
      throw new Error(
        `Input is too large, number must be less than or equal to ${Number.MAX_SAFE_INTEGER}`,
      );
    }

    if (input < 0) {
      throw new Error('Cannot represent negative inputs.');
    }

    let digit;
    let residual = Math.floor(input);
    let result = [];
    while (true) {
      digit = residual % 64;
      result.push(this._digits.charAt(digit));
      residual = Math.floor(residual / 64);
      if (residual === 0) {
        break;
      }
    }
    return result.reverse().join('');
  }

  /**
   * Converts a supplied base-64 string into a base 10 number.
   *
   * @see: The supplied string must have been converted to base-64 using {@link Radix10ToRadix64.toBase64}.
   *
   * @param {string} digits The string to be converted
   * @returns {number} The resulting base-10 number
   * @memberof Radix10ToRadix64
   */
  public toRadix10(digits: string): number {
    return digits.split('').reduce((result: number, digit: string) => {
      if (!this._digits.includes(digit)) {
        throw new Error('Invalid string');
      }
      const newResult = result * 64 + this._digits.indexOf(digit);
      if (newResult > Number.MAX_SAFE_INTEGER) {
        throw new Error(`Number being decoded exceeds max safe integer.`);
      }
      return newResult;
    }, 0);
  }
}
