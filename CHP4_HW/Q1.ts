class Student {
    name: string;
    studentId: number;
    grade: string;
    address: string;

    constructor(name:string, studentId:number, grade:string, address:string) {
        this.name = name;
        this.studentId = studentId;
        this.grade = grade;
        this.address = address;

    }

    displayInfo(): string {
        return `Name: ${this.name}, Student ID: ${this.studentId}, Grade: ${this.grade}, Address: ${this.address}`;
    }
}

const s = new Student("Kevil",69,"S","Mira Road");
console.log(s.displayInfo());