abstract class Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    abstract getDetails(): string;
    abstract getRole(): string;
}

class Student extends Person {
    grade: number;
    constructor(name: string, grade: number) {
        super(name);
        this.grade = grade;
    }
    getDetails(): string {
        return `Student Name: ${this.name}, Grade: ${this.grade}`;
    }
    getRole(): string {
        return "Student";
    }
}

class Teacher extends Person {
    subject: string;
    constructor(name: string, subject: string) {
        super(name);
        this.subject = subject;
    }
    getDetails(): string {
        return `Teacher Name: ${this.name}, Subject: ${this.subject}`;
    }
    getRole(): string {
        return "Teacher";
    }
}
const student = new Student("Alice", 10);
const teacher = new Teacher("Mr. Smith", "Mathematics");

console.log(student.getDetails());
console.log(student.getRole());  
console.log(teacher.getDetails()); 
console.log(teacher.getRole());    