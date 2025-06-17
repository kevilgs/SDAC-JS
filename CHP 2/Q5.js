function totalCost(discount = 10,...price){
    console.log("Discount applied: " + discount + "%");
    const total = price.reduce((total,price)=>{
        return total + price;
    })
    const discountAmount = (total * discount) / 100;
    return console.log(total - discountAmount);
}

totalCost(20, 100, 200, 300);
totalCost(undefined, 50, 150, 250);