// task to write a function to check whether a triangle is equilateral, isosceles or scalene
// Equilateral = 3 equal sides
// Isosceles = 2 equal sides
// Scalene = 1 equal side

class Triangle {
    constructor(...sides) {
      this.a = sides[0];
      this.b = sides[1];
      this.c = sides[2];
      this.sortedSides = sides.sort();
      this.isInInequality = sides[0] + sides[1] < sides[2]
    }
    get isEquilateral() {
      if(this.a == 0){
        return false
      }
       return this.a == this.b && this.b == this.c
    }
    get isIsosceles() {
      if(this.isInInequality){
        return false
      }
      return this.a == this.b || this.b == this.c || this.c == this.a
    }
    get isScalene() {
      if(this.isInInequality){
        return false
      }
       return this.a != this.b && this.b != this.c && this.c != this.a
    }
  }
  




