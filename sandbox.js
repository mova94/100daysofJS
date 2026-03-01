class Car {
    constructor(brand, engine, color) {
        this.brand = brand;
        this.engine = engine;
        this.color = color;
    }

    start() {
        console.log(`The ${this.brand} has started its ${this.engine} engine!`)
    } 

    drive() {
        console.log(`The car is moving!`)
    }
}

class ElectricCar extends Car {
    constructor(brand,engine,color, batteryLength){
        super(brand,engine,color);
        this.batteryLength = batteryLength;
    }

    start() {
        console.log(`The ${this.brand} has ${this.batteryLength} till battery needs to be recharged!`);
    }
}



var newCar = new Car('Toyota', 'v4', 'Metallic Grey');
var newElectricCar = new ElectricCar('Tesla', 'None', 'Blue', 250);

// newCar.start()
// newCar.drive()

newElectricCar.start();
