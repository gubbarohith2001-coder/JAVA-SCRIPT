// parent class
class Shape {
  constructor(name) {
    this.name = name;
  }

  logname() {
    console.log("shape name :" + this.name);
  }
}

// sub class
class Rectangle extends Shape {
  constructor(name, width, height) {
    super(name);

    this.height = height;
    this.width = width;
  }
}

class circle extends Shape {
  constructor(name, radius) {
    super(name);

    this.radius = radius;
  }

  logname(){
    console.log("circle name: " + this.name);
  }
}

const rect = new Rectangle("rect1", 20, 20);
console.log(rect);
rect.logname();

const cir = new circle("cir 1", 30);
cir.logname();

console.log(rect instanceof Rectangle);
console.log(rect instanceof Shape);
