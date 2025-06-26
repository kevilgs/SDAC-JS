interface Attendance {
    markAttendance(): void;
}

class Student implements Attendance {
    name: string;
    isPresent: boolean = false;

    constructor(name: string) {
        this.name = name;
    }

    markAttendance(): void {
        this.isPresent = true;
    }
}
const student1 = new Student("Kevil");
student1.markAttendance();
console.log(`${student1.name} is present: ${student1.isPresent}`);