// TODO - program to get the volume of a SPHERE with four decimal places using objects and classes
//Volume of a Sphere = 4/3πr^3

function Sphere(radius) {
    this.radius=radius;
}
Sphere.prototype.getVolume = function() {
    let r = Math.abs(this.radius);
    return (4/3)*Math.PI*Math.pow(r,3);
}
let obj = new Sphere(3); //113.0973
console.log(obj.getVolume().toFixed(4));
