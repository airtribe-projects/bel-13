class OrderProcessingService {
    createOrder(orderDetails) { 
        // Logic to create an order
        console.log("Order created:", orderDetails);
    }

    processPayment(orderId, paymentDetails) {
        // Logic to process payment

        // Check for CC, Debit card, BTC
        console.log("Payment processed for order ID:", orderId);
    }

    sendEmailConfirmation(orderId, email) {
        // Logic to send email confirmation
        // Start smtp server, 
        // fetch the template
        // feeds the customer data
        // sends the email
        console.log("Email confirmation sent for order ID:", orderId, "to email:", email);
    }
}