function payment(success){
    return new Promise((resolve,reject)=> {
        if (success){
            resolve("Payment successful!");
        }else {
            reject("Payement Failed");
        }
    })
}

//await is used to wait for the promise to resolve or reject
async function test(){
    try {
        const result = await payment(false);
        console.log(result); 
    } catch (error) {
        console.log("Error:", error);
    }
}
test();