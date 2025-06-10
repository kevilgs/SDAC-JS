
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function filterEvenNumbers(numbers) {
    return numbers.filter((numbers)=>{
        return numbers % 2 === 0;
    })
}

console.log(filterEvenNumbers(numbers));