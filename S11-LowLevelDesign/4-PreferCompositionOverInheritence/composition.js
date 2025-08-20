class Duck {
    constructor(name) {
        this.name = name;
    }

    displayName() {
        console.log(`I am a duck named ${this.name}`);
    }
}

class QuackBehaviour {
    quack() {
        console.log("Quack!");
    }
}

class SwimBehaviour {
    swim() {
        console.log("Swim!");
    }
}

class FlyBehaviour {
    fly() {
        console.log("Fly!");
    }
}


class LakeDuck extends Duck {
    constructor(name, quackBehaviour, swimBehaviour, flyBehaviour) {    
        super(name);
        this.quackBehaviour = quackBehaviour;
        this.swimBehaviour = swimBehaviour;
        this.flyBehaviour = flyBehaviour;
    }

    performQuack() {
        this.quackBehaviour.quack();
    }

    performFly() {
        this.flyBehaviour.fly();
    }

    performSwim() {
        this.swimBehaviour.swim();
    }
}

class RubberDuck extends Duck {
    constructor(name) {
        super(name, quackBehaviour);
        this.quackBehaviour = quackBehaviour;
        
    }

    performQuack() {
        this.quackBehaviour.quack();
    }
}

class SqueakBehaviour extends QuackBehaviour{
    quack() {
        console.log("Squeak!");
    }
}




