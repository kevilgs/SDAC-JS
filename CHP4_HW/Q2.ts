class School {
    static totalStudent: number = 0;
    students: Student[] = [];

    addStudent(student: Student): void {
        this.students.push(student);
        School.totalStudent++;
    }
}
class Student {
    name: string;
    studentId: number;
    grade: string;
    address: string;

    constructor(name: string, studentId: number, grade: string, address: string) {
        this.name = name;
        this.studentId = studentId;
        this.grade = grade;
        this.address = address;
    }

    displayInfo(): string {
        return `Name: ${this.name}, Student ID: ${this.studentId}, Grade: ${this.grade}, Address: ${this.address}`;
    }
}
const school = new School();
const s1 = new Student("Kevil", 1, "A", "Mira Road");
const s2 = new Student("John", 2, "B", "Andheri");
school.addStudent(s1);
console.log(school.students)