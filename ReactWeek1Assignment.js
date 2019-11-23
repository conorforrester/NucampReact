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
        const studentCheck = students.filter(student => Student[1] === students);
    }
}
