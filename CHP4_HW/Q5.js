var Student = /** @class */ (function () {
    function Student(name) {
        this.isPresent = false;
        this.name = name;
    }
    Student.prototype.markAttendance = function () {
        this.isPresent = true;
    };
    return Student;
}());
var student1 = new Student("Kevil");
student1.markAttendance();
console.log("".concat(student1.name, " is present: ").concat(student1.isPresent));
