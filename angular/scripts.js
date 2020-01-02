"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person() {
        this.projectName = "Default";
    }
    Person.prototype.calcBught = function () {
        return this.budget * 2;
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Student.prototype.changeName = function (name) {
        this.projectName = name;
    };
    return Student;
}(Person));
var SingleTon = /** @class */ (function () {
    function SingleTon() {
    }
    SingleTon.getInstance = function () {
        if (!SingleTon.instance) {
            SingleTon.instance = new SingleTon();
        }
        return SingleTon.instance;
    };
    return SingleTon;
}());
