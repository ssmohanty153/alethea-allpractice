"use strict";
exports.__esModule = true;
exports.age = 20;
var Employee = /** @class */ (function () {
    function Employee(name, code) {
        this.empName = name;
        this.empCode = code;
    }
    Employee.prototype.displayEmployee = function () {
        console.log(this.empCode + "-->" + this.empName);
    };
    return Employee;
}());
exports.Employee = Employee;
var companyName = "subhransu";
