export class Vector2 {
  constructor(public x = 0, public y = 0) {}

  /**
   * Sets the x and y components of this vector.
   * @param x Float
   * @param y Float
   * @returns this Vector2
   */
  set(x: number, y: number) {
    this.x = x;
    this.y = y;

    return this;
  }

  /**
   * Converts this vector to a unit vector - that is, sets it equal to a vector with the same direction as this one, but length 1.
   * @returns new Vector2
   */
  normalize() {
    const length = this.length();

    if (!length) {
      return new Vector2();
    }

    return new Vector2(this.x / length, this.y / length);
  }

  /**
   * Computes the Euclidean length (straight-line length) from (0, 0) to (x, y).
   * @returns Float
   */
  length() {
    return Math.sqrt(this.x ** 2 + this.y ** 2);
  }

  [Symbol.iterator]() {
    return [this.x, this.y][Symbol.iterator]();
  }
}
