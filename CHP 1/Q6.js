
marks = [46, 33, 67, 89, 90, 100, 78, 56, 45];
function findTopper (marks) {
    return marks.reduce((topper, marks) => {
        return topper > marks ? topper : marks;
    });  
}

console.log(findTopper(marks));

// ... unpack
// function findMax (marks){
//  return Math.max(...marks);
// }