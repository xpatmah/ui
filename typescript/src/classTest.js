"use strict";
class Department {
    constructor(name, grades) {
        this.name = name;
        this.grades = grades;
    }
    display() {
        console.log(this.name + " " + this.grades);
    }
}
class ComputerDepartment extends Department {
    constructor(cname, cgrades) {
        super(cname, cgrades);
        this.cname = cname;
        this.cgrades = cgrades;
    }
    display() {
        console.log(this.cname + " " + this.cname);
    }
}
