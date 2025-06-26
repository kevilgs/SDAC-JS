abstract class Institute {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    abstract getInstitutionType(): string;
}

interface Management {
    addStudent(student: string): void;
    removeStudent(student: string): void;
    listStudents(): string[];
}

class School extends Institute implements Management {
    students: string[] = [];

    constructor(name: string) {
        super(name);
    }

    getInstitutionType(): string {
        return "School";
    }

    addStudent(student: string): void {
        this.students.push(student);
    }

    removeStudent(student: string): void {
        this.students = this.students.filter(s => s !== student);
    }

    listStudents(): string[] {
        return this.students;
    }
}

class College extends Institute implements Management {
    students: string[] = [];

    constructor(name: string) {
        super(name);
    }

    getInstitutionType(): string {
        return "College";
    }

    addStudent(student: string): void {
        this.students.push(student);
    }

    removeStudent(student: string): void {
        this.students = this.students.filter(s => s !== student);
    }

    listStudents(): string[] {
        return this.students;
    }
}

const mySchool = new School("Greenwood High");
mySchool.addStudent("Alice");
mySchool.addStudent("Bob");
mySchool.removeStudent("Alice");

console.log(`${mySchool.name} (${mySchool.getInstitutionType()}):`, mySchool.listStudents());

const myCollege = new College("City College");
myCollege.addStudent("Charlie");
myCollege.addStudent("Dave");
myCollege.removeStudent("Dave");

console.log(`${myCollege.name} (${myCollege.getInstitutionType()}):`, myCollege.listStudents());