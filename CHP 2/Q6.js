function processPayment(paymentInfo) {
    try {
        if (!paymentInfo) {
            throw new Error("Payment details missing");
        }
        if (Math.random() < 0.5) {
            throw new Error("Payment failed");
        }
        if (Math.random() < 0.2) {
            throw new Error("Network error");
        }
        console.log("Payment successful!");
    } catch (error) {
        console.log("Error during payment:", error.message);
    }
}
processPayment("1234-5678-9012-3456");