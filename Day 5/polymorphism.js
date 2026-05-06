class Shape {
    draw() {
        console.log('Drawing a shape');
    }
}
 
class Circle extends Shape {
    draw() {
        console.log('Drawing a circle');
    }
}
 
class Square extends Shape {
    draw() {
        console.log('Drawing a square');
    }
}
 
const shapes = [new Circle(), new Square()];
 
shapes.forEach(shape => shape.draw());
 

//----------------------------------Example for Polymorphism--------------------------------------------------------------------------------------------------------------

class Vehicle {
    start() {
        console.log("Vehicle is Starting");
    }
}

class Car extends Vehicle {
    start() {
        console.log("Car is Starting");
    }
}

class Bike extends Vehicle {
    start() {
        console.log("Bike is Starting");
    }
}

const vehicles = [new Car(), new Bike()];

vehicles.forEach(vehicle => vehicle.start());


//------------------------------------------Example for Polymorphism-------------------------------------------------------------------------------------------------------


class Payment {
    pay() {
        console.log("Processing payment");
    }
}

class CreditCard extends Payment {
    pay() {
        console.log("Payment done by using Credit Card");
    }
}

class UPI extends Payment {
    pay() {
        console.log("Payment done by using UPI");
    }
}

const payments = [new CreditCard(), new UPI()];

payments.forEach(payment => payment.pay());