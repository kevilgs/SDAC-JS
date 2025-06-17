// function addtoCart(stock){
//     if (stock == 0) {
//         throw new Error("Item out of stock");
//     }
// }

// function m1(){
//     addtoCart(0);
// }
// function m2(){
//     try {
//         m1();
//     } catch (error) {
//         console.log(error.name ,":", error.message);
//     }
// }

// m2();

function addToCart(){
 try {
    checkStock(8);
 } catch (error) {
    console.log(error.name + ":", error.message);
 }
}

function checkStock(stock){
    if (stock < 3){
        throw new Error("Low stock warning");
    }else{
        console.log("Available stock:", stock);
    }
}

addToCart();