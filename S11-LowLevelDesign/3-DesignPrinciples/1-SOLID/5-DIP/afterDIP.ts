interface Engine {
    start(): void;
}

class PetrolEngine implements Engine {
    start() {
        console.log("Petrol engine started");
    }
}

class CNGEngine implements Engine {
    start() {
        console.log("CNG engine started");
    }
}
class DieselEngine implements Engine {
    start() {
        console.log("Diesel engine started");
    }
}


class Car {
    private engine: Engine;

    constructor(engine: Engine) {
        this.engine = engine;
    }

    startCar() {
        this.engine.start();
        console.log("Car started");
    }
}

let petrolEngine = new PetrolEngine();
let merc: Car =  new Car(petrolEngine)


let dieselEngine = new DieselEngine();
let scorpio: Car =  new Car(dieselEngine);

// You can achieve Dependency Inversion by using Dependency Injection







