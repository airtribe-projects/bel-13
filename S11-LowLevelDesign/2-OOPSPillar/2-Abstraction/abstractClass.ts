/* Vehicle

Car
-> petrol Car 
-> Diesel Care
-> Electric Car

*/

interface drivable{
    start(): void,
    stop(): void,
    drive(): void,
}

interface flyable {
    takeoff(): void, 
    cruise(): void,
    land(): void,
}





abstract class Vehicle {
    make: string;
    model: string;

    constructor(make: string, model: string) {
        this.make = make;
        this.model = model;
    }

    start(): void {
        console.log(`Starting the vehicle: ${this.make} ${this.model}`);
    }
    // TS doesn't support method overloading
    // start(engine): string {
    //     console.log("hello world");
    // }
    abstract stop(): void;

    // drive(): void {
    //     console.log(`Driveing the vehicle: ${this.make} ${this.model}`);
    // }

}

const bus = new Vehicle("Tata", "608");

class Bicycle extends Vehicle {

}


class Car extends Vehicle {
    color: string;
    
    constructor(make: string, model: string, color: string) {
        super(make, model);
        this.color = color;
    }
}

class PetrolCar extends Car implements drivable{
    constructor(make: string, model: string, color: string) {
        super(make, model, color);
    }
    
    stop(): void {
        throw new Error("Method not implemented.");
    }
    drive(): void {
        throw new Error("Method not implemented.");
    }

    start(): void {
        console.log(`Starting the petrol vehicle: ${this.make} ${this.model}`);
    }
    // stop and drive


}

class RoboTaxi extends Car implements drivable, flyable {
    takeoff(): void {
        throw new Error("Method not implemented.");
    }
    cruise(): void {
        throw new Error("Method not implemented.");
    }
    land(): void {
        throw new Error("Method not implemented.");
    }
    start(): void {
        throw new Error("Method not implemented.");
    }
    stop(): void {
        throw new Error("Method not implemented.");
    }
    drive(): void {
        throw new Error("Method not implemented.");
    }

}

class Bird implements flyable{
    takeoff(): void {
        throw new Error("Method not implemented.");
    }
    cruise(): void {
        throw new Error("Method not implemented.");
    }
    land(): void {
        throw new Error("Method not implemented.");
    }
    
}

// diesel 










const test = (param1, param2, param3) => true;



test(1, 2);

class 