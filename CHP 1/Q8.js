const students = [
    {
        name : "Alice",
        marks : 85,
    },
    {
        name : "Bob",
        marks : 92,
    },
    {
        name : "Charlie",
        marks : 78,
    },
    {
        name : "David",
        marks : 67,
    },
    {
        name : "Eve",
        marks : 95,
    }
]

const totalMarks = students.reduce((students, total) => {
    return students.marks + total;
});

console.log(totalMarks);