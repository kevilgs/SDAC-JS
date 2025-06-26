var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, grade) {
        var _this = _super.call(this, name) || this;
        _this.grade = grade;
        return _this;
    }
    Student.prototype.getDetails = function () {
        return "Student Name: ".concat(this.name, ", Grade: ").concat(this.grade);
    };
    Student.prototype.getRole = function () {
        return "Student";
    };
    return Student;
}(Person));
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(name, subject) {
        var _this = _super.call(this, name) || this;
        _this.subject = subject;
        return _this;
    }
    Teacher.prototype.getDetails = function () {
        return "Teacher Name: ".concat(this.name, ", Subject: ").concat(this.subject);
    };
    Teacher.prototype.getRole = function () {
        return "Teacher";
    };
    return Teacher;
}(Person));
var student = new Student("Alice", 10);
var teacher = new Teacher("Mr. Smith", "Mathematics");
console.log(student.getDetails());
console.log(student.getRole());
console.log(teacher.getDetails());
console.log(teacher.getRole());
