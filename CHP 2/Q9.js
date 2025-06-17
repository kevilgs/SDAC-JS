class InvalidCouponError extends Error {
  constructor(message) {
    super(message);
    this.name = "InvalidCoupon";
  }
}

function applyCoupon(coupon) {
    try {
        if(coupon !== "DISCOUNT10") {
            throw new InvalidCouponError("Invalid coupon code");
        }
    } catch (error) {
        console.error(error.name + ": " + error.message);
    }
}
applyCoupon("DISCOUNT20");