class Rectangle {
  constructor(name, width, height) {
    this.name = name;
    this.width = width;
    this.height = height;
  }

  area() {
    return this.height * this.width;
  }

  static getClass() {
    return "rectangle";
  }
}

const rect = new Rectangle("rect1", 10, 10);
console.log(rect.area());
// console.log(rect.getClass());
console.log(Rectangle.getClass());
