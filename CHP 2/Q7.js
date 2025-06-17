function addtoCart(stock){
    if (stock == 0) {
        throw new Error("Item out of stock");
    }
}

function m1(){
    addtoCart(0);
}
function m2(){
    try {
        m1();
    } catch (error) {
        console.log(error.name ,":", error.message);
    }
}

m2();