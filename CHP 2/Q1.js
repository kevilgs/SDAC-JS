const prodnames = ["Phone", "Laptop", "Tablet", "Smartwatch"];
const proddetails = {
    Phone: {
        price : 699,
    },
    Laptop: {
        price : 999,
    },
    Tablet: {
        price : 499,
    },
    Smartwatch: {
        price : 199,
    }
}
const [a1, a2, a3, a4] = prodnames;
const [price1, price2, price3, price4] = [
    proddetails.Phone.price,
    proddetails.Laptop.price,
    proddetails.Tablet.price,
    proddetails.Smartwatch.price
];
console.log(a1, a2, a3, a4);
console.log(price1, price2, price3, price4);