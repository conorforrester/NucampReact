class Student {
    constructor (name, email, community) {
        this.name = name;
        this.email = email;
        this.community = community;
    }
}

class Bootcamp {
    constructor(name, level, students = []) {
        this.name = name;
        this.level = level;
        this.students = students;
    }

    registerStudent(student) {
        //idea is to compare student position of 1 (email) to the Bootcamp students
        //Thought about using includes method since we can't set email = entire array
        if (this.students.includes(Student.email)) {
            // this.students = this.students;
            console.log(`Cannot register ${student} because he/she is already registered`);
        } else {
            console.log(`The ${student} has been registered!`);
            this.students.push(student);
        }
    }
}
