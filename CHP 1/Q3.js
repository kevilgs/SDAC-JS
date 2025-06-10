marks = [20, 30, 40, 50, 60, 70, 80, 90, 100];

const increaseMarks = function (marks) {
    return marks.map((marks)=>{
        return marks + 10;
    })
}

console.log(increaseMarks(marks));


