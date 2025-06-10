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

const filterMarks = students.filter((students)=> {
    return students.marks >= 80;
})

console.log(filterMarks);