/* TODO - 
1. Add an area() method to the Rectangle class
2. Create a Square class that satisfies the following conditions:
- It is a subclass of Rectangle
- It contains a constructor and no other methods
- It can use the Rectangle class' area method to print the area of Square object
*/

class Rectangle {
    constructor(height, width) {
        this.width=width;
        this.height=height;
    }
}

class Square extends Rectangle {
    constructor(sideLength) {
        super(sideLength, sideLength);
    }

    get area() {
        return this.height*this.width;
    }

    set sideLength(newLength) {
        this.height=newLength;
        this.width=newLength
    }
}

const square = new Square(2);







