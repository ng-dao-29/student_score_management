"use strict";
exports.__esModule = true;
exports.Student = void 0;
var Student = /** @class */ (function () {
    function Student(name, score) {
        this.next = null;
        this.name = name;
        this.score = score;
    }
    Student.prototype.getDataStudent = function () {
        return "sinh vi\u00EAn: ".concat(this.name, " || \u0111\u1EA1t m\u1EE9c \u0111i\u1EC3m l\u00E0 : ").concat(this.score);
    };
    return Student;
}());
exports.Student = Student;
