class Paymentservice {
    deductAmount(paymmentType, amount) {

        if (paymmentType == "creditcard") {
            // Logic to process credit card payment
            console.log("Processing credit card payment of amount:", amount);
        } else if (paymmentType == "debitcard") {
            // Logic to process debit card payment
            console.log("Processing debit card payment of amount:", amount);
        } else if (paymmentType == "bitcoin") {
            // Logic to process bitcoin payment
            console.log("Processing bitcoin payment of amount:", amount);
        }
        else if (paymmentType == "upi") {
            // Logic to process bitcoin payment
            console.log("Processing upi payment of amount:", amount);
        }
        else {
            console.log("Invalid payment type");
        }
    }
}

/* Interface

interface PaymentMethod {
    processPayment(amount): void
}

*/
class PaymentMethod {
    processPayment(amount) {
        throw new Error("processPayment method should be implemented");
    }
}

class CreditCardPayment extends PaymentMethod {
    processPayment(amoount) {
        // Logic to process credit card payment
        console.log("Processing credit card payment of amount:", amoount);
    }
}

class DebitCardPayment extends PaymentMethod {
    processPayment(amoount) {
        // Logic to process debit card payment
        console.log("Processing debit card payment of amount:", amoount);
    }
}
class BitcoinPayment extends PaymentMethod {
    processPayment(amoount) {
        // Logic to process bitcoin payment
        console.log("Processing bitcoin payment of amount:", amoount);
    }
}

class PaymentService {
    constructor(paymentMethod) {
        this.paymentMethod = paymentMethod;
    }

    deductAmount(amount) {
        this.paymentMethod.processPayment(amount);
    }
}

const creditCardPayment = new CreditCardPayment();
const bitcoinPayment = new BitcoinPayment();
const debitCardPayment = new DebitCardPayment();
const paymentService = new PaymentService(creditCardPayment);
paymentService.deductAmount(1000); // Processing credit card payment of amount: 1000









