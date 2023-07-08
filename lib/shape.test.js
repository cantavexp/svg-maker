const {Shape, Circle, Square, Triangle } = require("./shape");



describe("Shape", () => {
  test("color of shape", () => {
    const shape = new Shape();
    shape.setColor("red");
    expect(Shape.color).toBe("red");
  });
});





describe("Circle", () => {
  test("color of shape", () => {
    const shape = new Circle();
    shape.setColor("red");
    expect(Shape.color).toBe[`<circle cx="10" cy="10" r="2" fill="${this.color}"/>`];
  });
});
    
    

describe("Square", () => {
  test("color of shape", () => {
    const shape = new Square();
    shape.setColor("red");
    expect(Shape.color).toBe[`<rect cx="10" cy="10" r="2" fill="${this.color}"/>`];
  });
});
    
    
    
    
 
describe("Triangle", () => {
  test("color of shape", () => {
    const shape = new Triangle();
    shape.setColor("red");
    expect(Shape.color).toBe[`<polygon cx="10" cy="10" r="2" fill="${this.color}"/>`];
  });
});
    
    