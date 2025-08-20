class Address {
    constructor(street, city) {
        this.street = street;
        this.city = city;
    }
    
    getCity() {
        return this.city;
    }
}

class Customer {
    constructor(name, address) {
        this.name = name;
        this.address = address;  // Permanent Address
        this.currentAddress = address;
    }
    
    getAddress() {
        return this.address;
    }

}

class Order {
    constructor(customer) {
        this.customer = customer;
    }

    printShipingCity() {
        console.log( this.customer.getAddress().getCity());
    }
}

// violates your law of demeter
