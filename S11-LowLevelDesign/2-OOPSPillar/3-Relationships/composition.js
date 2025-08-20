// Has - A (Strong)
// Composition
// Human & Heart

class Heart {
    constructor(blood, valves, muscles) {
        this.blood = blood;
        this.valves = valves;
        this.muscles = muscles;
    }

    beat() {
        console.log("The heart is beating")
    }
}


class Person {
    #heart;
    constructor(name) {
        this.name = name;
        this.#heart = new Heart("O+", 4, 'strong');
    }

    showName() {
        console.log(`Player: ${this.name}`);
    }


    //...
}

const jay = new Person('Jay');

jay.showName();

