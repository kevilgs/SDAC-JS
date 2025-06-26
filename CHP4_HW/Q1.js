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
var s = new Student("Kevil", 69, "S", "Mira Road");
console.log(s.displayInfo());
