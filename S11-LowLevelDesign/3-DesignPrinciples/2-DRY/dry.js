const calculateTax = (amount) => 0.1*amount;

const calculateTotal = (amount) => {
    let tax = calculateTax(amount);
    let total = amount + tax;
    return total;
}

const calculateFinalTotal = (amount) => {
    let tax = calculateTax(amount);
    let finalTotal = amount * 1.1 + tax;
    return finalTotal;
}
