marks = [45,33,67,89,90,100,78,56,45];
const calculateGrade = (marks) => {
    return marks.map((marks) => {
        if (marks >= 90) {
            return 'A';
        } else if (marks >= 80) {
            return 'B';
        } else if (marks >= 70) {
            return 'C';
        } else if (marks >= 60) {
            return 'D';
        } else {
            return 'E';
        }
    });
}

console.log(calculateGrade(marks));

const passedStudents = (marks) => {
    return marks.filter((marks) => {
        return marks >= 75;
    });
}

console.log(passedStudents(marks));

const totalmarks = (marks) => {
    return marks.reduce((total, marks) => {
        return total + marks;
    });
}

console.log(totalmarks(marks));

// const totalmarks = marks.reduce((total, marks) => {
//     return total + marks;   
// });
