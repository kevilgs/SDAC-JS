class Course {
    courseName: string;
    courseCode: string;
    instructor: string;

    constructor(courseName: string, courseCode: string, instructor: string) {
        this.courseName = courseName;
        this.courseCode = courseCode;
        this.instructor = instructor;
    }
}
const c1 = new Course("Mathematics", "MATH101", "Dr. Smith");
console.log(`Course Name: ${c1.courseName}, Course Code: ${c1.courseCode}, Instructor: ${c1.instructor}`);