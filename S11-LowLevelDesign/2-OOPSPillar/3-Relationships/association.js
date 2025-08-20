// Uses -  A relationship
// Person and a Bank
// Association

class Person {
    constructor(name) {
        this.name;
    }

    openAccount(bank) {
        console.log(`${this.name} opened an account at ${bank.name}`);
    }
}

class Bank {
    constructor(name) {
        this.name;
    }

    providesLoan(person) {
        console.log(`${this.name} has sanctioned a loan to ${person.name}`);       
    }
}

const jay = new Person('Jay');

const PNB = new Bank('PNB');

jay.openAccount(PNB);

PNB.providesLoan(jay);






