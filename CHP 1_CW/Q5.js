
marks = [34,45,67,89,90,100,23,56,78,12];

const square = marks.map((marks)=>{
    return marks * marks;
})

console.log(square);

const filterOddNumbers = marks.filter((marks)=>{
    return marks % 2 !== 0;
})

console.log(filterOddNumbers);

const sum = marks.reduce ((x,y)=>{
    return x + y;
})

console.log(sum)