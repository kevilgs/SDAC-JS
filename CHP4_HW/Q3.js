var Course = /** @class */ (function () {
    function Course(courseName, courseCode, instructor) {
        this.courseName = courseName;
        this.courseCode = courseCode;
        this.instructor = instructor;
    }
    return Course;
}());
var c1 = new Course("Mathematics", "MATH101", "Dr. Smith");
console.log("Course Name: ".concat(c1.courseName, ", Course Code: ").concat(c1.courseCode, ", Instructor: ").concat(c1.instructor));
