class Duck {
    constructor(name) {
        this.name = name;
    }

    displayName() {
        console.log(`I am a duck named ${this.name}`);
    }
    
    quack() {   
        console.log(`${this.name} quacks!`);
    }

    swim() {
        console.log(`${this.name} swims!`);
    }


    fly() {
        console.log(`${this.name} flies!`);
    }
}

class LakeDuck extends Duck {
    constructor(name) {
        super(name);
    }

    fly() {
        console.log(`${this.name} is flying over a lake`);
    }
}

class RiverDuck extends Duck {
    constructor(name) {
        super(name);
    }

    fly() {
        console.log(`${this.name} is flying over a river`);
    }
}

class RubberDuck extends Duck {
    constructor(name) {
        super(name);
    }

    quack() {
        throw new Error(`${this.name} can't quack!`);
    }
    swim() {
       throw new Error(`${this.name} can't swim!`);
    }
    fly() {
        throw new Error(`${this.name} can't fly!`);
    }
}

// Violating LSP






