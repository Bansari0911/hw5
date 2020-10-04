class Square {
  constructor(side) {
    this.side = side;
  }
  perimeter() {
    return this.side * 4;
  }

  area() {
    return this.side * this.side;
  }

  diagonal() {
    return Math.sqrt(2 * this.side * this.side).toFixed(3);
  }

  descibe() {
    return `Square with side ${
      this.side
    } has perimeter of ${this.perimeter()}, area of ${this.area()}, and diagonal of ${this.diagonal()}.`;
  }
}

const square1 = new Square(2);
const square2 = new Square(10);
const square3 = new Square(16);

console.log(square1.descibe());
console.log(square2.descibe());
console.log(square3.descibe());
