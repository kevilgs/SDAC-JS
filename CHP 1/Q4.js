marks = [34, 45, 67, 89, 90, 100, 78, 56, 45];

function filterPassedStudents (marks){
    return marks.filter((marks) => {
        return marks >= 75;
    });
}

console.log(filterPassedStudents(marks));