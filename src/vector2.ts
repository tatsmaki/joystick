export class Vector2 {
  constructor(public x = 0, public y = 0) {}

  set(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  normalize() {
    const length = Math.sqrt(this.x ** 2 + this.y ** 2);

    if (!length) {
      return new Vector2();
    }

    return new Vector2(this.x / length, this.y / length);
  }

  [Symbol.iterator]() {
    return [this.x, this.y][Symbol.iterator]();
  }
}
