var School = /** @class */ (function () {
    function School() {
        this.students = [];
    }
    School.prototype.addStudent = function (student) {
        this.students.push(student);
        School.totalStudent++;
    };
    School.totalStudent = 0;
    return School;
}());
var Student = /** @class */ (function () {
    function Student(name, studentId, grade, address) {
        this.name = name;
        this.studentId = studentId;
        this.grade = grade;
        this.address = address;
    }
    Student.prototype.displayInfo = function () {
        return "Name: ".concat(this.name, ", Student ID: ").concat(this.studentId, ", Grade: ").concat(this.grade, ", Address: ").concat(this.address);
    };
    return Student;
}());
var school = new School();
var s1 = new Student("Kevil", 1, "A", "Mira Road");
var s2 = new Student("John", 2, "B", "Andheri");
school.addStudent(s1);
console.log(school.students);
