function Grades(english, math, physics, PE, geography) {
    this.english = english;
    this.math = math;
    this.physics = physics;
    this.PE = PE;
    this.geography = geography;

    this.average = () => {
        return (this.english + this.math + this.physics + this.PE + this.geography) / 5;
    }

    this.describe = () => {
        return "\nEnglish: " + this.english + 
        "\nMath: " + this.math + 
        "\nPhysics: " + this.physics+ 
        "\nPE: " + this.PE + 
        "\nGeography: " + this.geography +
        "\nAverage: " + this.average()
    }
}

    const grades1 = new Grades(100, 95, 95, 55, 95);
    const grades2 = new Grades(50, 69, 52, 100, 53);
    const grades3 = new Grades(100, 100, 100, 100, 100);
    const grades4 = new Grades(69, 69, 69, 69, 69);
    const grades5 = new Grades(80, 79, 81, 82, 78);

function Student(name, age, grades) {
    this.name = name;
    this.age = age;
    this.grades = grades;

    this.describe = () => {
        return "Hi, my name is " + this.name + " and I'm a student. i am " + this.age +
        " years old, and these are a few of my grades: " + this.grades.describe() + "\n"
    }
}

const jim = new Student("Jim", 15, grades1);
const tom = new Student("Tom", 16, grades2);
const john = new Student("John", 16, grades3);
const joe = new Student("Joe", 15, grades4);
const walter = new Student("Walter", 15, grades5);

const bestStudent = (students) => {
    let highestAverage = 0
    let bestStudentName = "";
    for (let i  = 0; i  < students.length; i++) {
        const currentStudent = students[i];
        const currentAverage = currentStudent.grades.average();
        if (currentAverage > highestAverage) {
            highestAverage = currentAverage;
            bestStudentName = currentStudent.name;
        }
    } return bestStudentName;
}

const worstStudent = (students) => {
    let lowestAverage = 100
    let worstStudentName = "";
    for (let i  = 0; i  < students.length; i++) {
        const currentStudent = students[i];
        const currentAverage = currentStudent.grades.average();
        if (currentAverage < lowestAverage) {
            lowestAverage = currentAverage;
            worstStudentName = currentStudent.name;
        }
    } return worstStudentName;
}


const students = [jim, tom, john, joe, walter, new Student("Carl", 15, new Grades(75, 82, 91, 100, 69))];

const students2 = [new Student("Anthony", 15, new Grades(60, 72, 91, 85, 77)),
                   new Student("Glenn", 15, new Grades(95, 72, 52, 65, 77)),
                   new Student("Shevon", 16, new Grades(58, 54, 77, 76, 82)),
                   new Student("Bryan", 15, new Grades(70, 84, 50, 82, 59)),
                   new Student("Steve", 15, new Grades(81, 81, 50, 88, 72)),
                   new Student("Alexander", 15, new Grades(92, 96, 72, 59, 56))];

const students3 = [new Student("Marcus", 15, new Grades(58, 71, 54, 100, 69)),
                   new Student("Joel", 16, new Grades(71, 50, 66, 56, 77)),
                   new Student("Alvan", 15, new Grades(67, 87, 67, 84, 77)),
                   new Student("Joseph", 16, new Grades(88, 86, 72, 92, 84)),
                   new Student("Michael", 16, new Grades(55, 86, 66, 86, 100)),
                   new Student("Mark", 16, new Grades(66, 59, 87, 93, 65))];

const students4 = [new Student("Bart", 16, new Grades(68, 78, 86, 89, 70)),
                   new Student("Thomas", 16, new Grades(95, 90, 56, 70, 87)),
                   new Student("Daniel", 15, new Grades(76, 67, 72, 83, 94)),
                   new Student("Jonathan", 16, new Grades(61, 65, 91, 53, 86)),
                   new Student("Adam", 16, new Grades(56, 72, 96, 68, 83)),
                   new Student("Timothy", 15, new Grades(85, 80, 58, 95, 68))];

const students5 = [new Student("Samuel", 16, new Grades(73, 50, 77, 66, 93)),
                   new Student("Ash", 16, new Grades(97, 58, 75, 70, 81)),
                   new Student("Seth", 15, new Grades(55, 59, 94, 81, 88)),
                   new Student("Jack", 16, new Grades(79, 98, 94, 93, 68)),
                   new Student("Isaac", 16, new Grades(65, 57, 61, 58, 97)),
                   new Student("Kobe", 15, new Grades(88, 72, 65, 100, 85))];

function ClassRoom(students, teacher, className) {
    this.students = students;
    this.teacher = teacher;
    this.className = className;

    this.describeStudents = () => {
        let studentString = "";
        for (let i = 0; i < this.students.length; i++) {
            const currentStudent = this.students[i];
            studentString = studentString + currentStudent.describe();
        }
        return studentString;
    }

    this.describe = () => {
        return "This is " + this.className + 
        ". their teacher's name is " + this.teacher +
        ", and the students are:\n" + this.describeStudents();
    }
    this.bestStudent = () => {
        let highestAverage = 0;
        let bestStudentName = "";
        for (let i  = 0; i  < this.students.length; i++) {
            const currentStudent = this.students[i];
            const currentAverage = currentStudent.grades.average();
            if (currentAverage > highestAverage) {
                highestAverage = currentAverage;
                bestStudentName = currentStudent.name;
            }
        } return bestStudentName;
    }
    
    this.worstStudent = () => {
        let lowestAverage = 100;
        let worstStudentName = "";
        for (let i  = 0; i  < this.students.length; i++) {
            const currentStudent = this.students[i];
            const currentAverage = currentStudent.grades.average();
            if (currentAverage < lowestAverage) {
                lowestAverage = currentAverage;
                worstStudentName = currentStudent.name;
            }
        } return worstStudentName;
    }
    
    this.totalAverage = () => {
        let classAverage = 0;
        for (let i = 0; i < this.students.length; i++) {
            const currentStudent = this.students[i];
            const currentAverage = currentStudent.grades.average();
            classAverage = classAverage + currentAverage;
       } return classAverage / this.students.length;
    }
}


const class8B = new ClassRoom(students, "Susan", "8b");
const class8E = new ClassRoom(students2, "Deborah", "8e");
const class8D = new ClassRoom(students3, "Mariah", "8d");
const class8C = new ClassRoom(students4, "Judy", "8c");
const class8A = new ClassRoom(students5, "Edna", "8a");

const classroomsThing = [class8A, class8B, class8C, class8D, class8E];

function School(classrooms, name) {
    this.classrooms = classrooms;
    this.name = name;


    this.bestClass = () => {
        let highestAverage = 0;
        let bestClassName = "";
        for (let i  = 0; i  < this.classrooms.length; i++) {
            const currentClass = this.classrooms[i];
            const currentAverage = currentClass.totalAverage();
            if (currentAverage > highestAverage) {
                highestAverage = currentAverage;
                bestClassName = currentClass.className;
            }
        } return bestClassName;
    }
    
    this.worstClass = () => {
        let lowestAverage = 100;
        let worstClassName = "";
        for (let i  = 0; i  < this.classrooms.length; i++) {
            const currentClass = this.classrooms[i];
            const currentAverage = currentClass.totalAverage();
            if (currentAverage < lowestAverage) {
                lowestAverage = currentAverage;
                worstClassName = currentClass.className;
            }
        } return worstClassName;
    }
    this.totalSchoolAverage = () => {
        let schoolAverage = 0;
        for (let i = 0; i < this.classrooms.length; i++) {
            const currentClass = this.classrooms[i];
            const currentAverage = currentClass.totalAverage();
            schoolAverage = schoolAverage + currentAverage;
       } return schoolAverage / this.classrooms.length;
    }
}

const washingmachine = new School(classroomsThing, "Washingmachine");