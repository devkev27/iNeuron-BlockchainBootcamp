// TODO - program to get the volume of a Cylinder with four decimal places using objects and classes
// Volume of a Cylinder = πr^2h r - radius h - height

function Cylinder(radius, height) {
    this.radius=radius;
    this.height=height;
}
Cylinder.prototype.getVolume = function() {
    let r = Math.floor(this.radius / 2)
    return this.height*Math.PI*Math.pow(r,2);
}
let obj = new Cylinder(2,3); //9.4248
console.log(obj.getVolume().toFixed(4));

