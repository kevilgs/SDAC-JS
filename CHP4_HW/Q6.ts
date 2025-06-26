function getStudentInfo<T>(info: T): T {
    return info;
}
const name1 = getStudentInfo<string>("Alice");
const id1 = getStudentInfo<number>(12345);