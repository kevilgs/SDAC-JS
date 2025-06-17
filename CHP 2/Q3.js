function payment(success){
    return new Promise((resolve,reject)=> {
        if (success){
            resolve("Payment successful!");
        }else {
            reject("Payement Failed");
        }
    })
}

payment(true).then(() => {
    console.log("Payment was successful!"); 
}).catch((error) => {
    console.log("Error:", error);   
}
);  
// then and catch methods are used to handle the resolved and rejected states of the promise.

// then catch is for once for eg database connection and all
// asyc and await is used for multiple times for eg in a loop