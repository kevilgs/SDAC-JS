const orders = [
    {
        id : "1",
        amount : 100,
    },
    {
        id : "45",
        amount : 200,
    },
    {
        id : "23",
        amount : 300,
    },
    {
        id : "67",
        amount : 400,
    },
    {
        id : "89",
        amount : 500,
    }
]

const totalAmount = orders.reduce((total, order) => 
     total + order.amount,0
);

console.log(totalAmount);
// total = 0;
// function totalAmt(orders){
//     for (let i = 0; i < orders.length; i++) {
//         total = total + orders[i].amount;
         
//     }
//     return total;
// }

// console.log(totalAmt(orders));