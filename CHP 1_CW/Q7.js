const employees = [
    {
        name: "Kevil",
        salary: 50000,
    },
    {
        name: "Soham",
        salary: 6000000,
    },
    {
        name: "Siddharth",
        salary: 7000,
    },
    {
        name: "Tejas",
        salary: 80000,
    }
]

const certainAmount = (employees) => {
    return employees.filter((employees)=>{
        return employees.salary > 50000;
    })
}

console.log(certainAmount(employees));