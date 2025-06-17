class Product {
    name;
    productId;
    price;
    constructor(name, productId, price) {
        this.name = name;
        this.productId = productId;
        this.price = price;
    }
    displayDetails() {
        console.log(`Product Name: ${this.name}`);
        console.log(`Product ID: ${this.productId}`);
        console.log(`Price: ${this.price}`);
    }
}

const prod1 = new Product("Phone", "P001", 699);
prod1.displayDetails();