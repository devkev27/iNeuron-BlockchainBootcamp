// TODO - program to get the volume of a SPHERE with four decimal places using objects and classes
// Volume of a Cone = πr^2h/3

function Cone(radius,height) {
    this.radius=radius;
    this.height=height;
}
Cone.prototype.getVolume = function() {
    let r = Math.floor(this.radius / 2)
    return Math.PI*Math.pow(r,2)*(this.height/3);
}
let obj = new Cone(2,3); //3.1416
console.log(obj.getVolume().toFixed(4));

