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
var Institute = /** @class */ (function () {
    function Institute(name) {
        this.name = name;
    }
    return Institute;
}());
var School = /** @class */ (function (_super) {
    __extends(School, _super);
    function School(name) {
        var _this = _super.call(this, name) || this;
        _this.students = [];
        return _this;
    }
    School.prototype.getInstitutionType = function () {
        return "School";
    };
    School.prototype.addStudent = function (student) {
        this.students.push(student);
    };
    School.prototype.removeStudent = function (student) {
        this.students = this.students.filter(function (s) { return s !== student; });
    };
    School.prototype.listStudents = function () {
        return this.students;
    };
    return School;
}(Institute));
var College = /** @class */ (function (_super) {
    __extends(College, _super);
    function College(name) {
        var _this = _super.call(this, name) || this;
        _this.students = [];
        return _this;
    }
    College.prototype.getInstitutionType = function () {
        return "College";
    };
    College.prototype.addStudent = function (student) {
        this.students.push(student);
    };
    College.prototype.removeStudent = function (student) {
        this.students = this.students.filter(function (s) { return s !== student; });
    };
    College.prototype.listStudents = function () {
        return this.students;
    };
    return College;
}(Institute));
var mySchool = new School("Greenwood High");
mySchool.addStudent("Alice");
mySchool.addStudent("Bob");
mySchool.removeStudent("Alice");
console.log("".concat(mySchool.name, " (").concat(mySchool.getInstitutionType(), "):"), mySchool.listStudents());
var myCollege = new College("City College");
myCollege.addStudent("Charlie");
myCollege.addStudent("Dave");
myCollege.removeStudent("Dave");
console.log("".concat(myCollege.name, " (").concat(myCollege.getInstitutionType(), "):"), myCollege.listStudents());
