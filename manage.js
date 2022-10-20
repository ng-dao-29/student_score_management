"use strict";
exports.__esModule = true;
exports.Manage = void 0;
var Student_1 = require("./Student");
var Manage = /** @class */ (function () {
    function Manage() {
        this.heal = null;
        this.tail = null;
        this.size = 0;
    }
    // thêm 1 nút vào đầu
    Manage.prototype.insertFirst = function (name, score) {
        var student = new Student_1.Student(name, score);
        student.next = this.heal;
        this.heal = student;
        if (!this.tail) {
            this.tail = student;
        }
        this.size++;
    };
    //thêm 1 nút vào cuối
    Manage.prototype.insertLast = function (name, score) {
        if (!this.heal) {
            this.insertFirst(name, score);
        }
        else {
            var student = new Student_1.Student(name, score);
            this.tail.next = student;
            this.tail = student;
            this.size++;
        }
    };
    //hiển thị danh sách
    Manage.prototype.showList = function () {
        var arraystudent = [];
        var currentStudent = this.heal;
        while (currentStudent !== null) {
            arraystudent.push(currentStudent.getDataStudent());
            currentStudent = currentStudent.next;
        }
        return arraystudent;
    };
    //để đếm xem trong danh sách có bao nhiêu sinh viên thi lại (điểm ≤ 5)
    Manage.prototype.totalStudentsFail = function () {
        var studentRetest = [];
        var amount = 0;
        var currentStudent = this.heal;
        while (currentStudent !== null) {
            if (currentStudent.score <= 5) {
                studentRetest.push(currentStudent.getDataStudent());
                currentStudent = currentStudent.next;
                amount++;
            }
            else {
                currentStudent = currentStudent.next;
            }
        }
        return studentRetest;
    };
    //hiện thị cắc sinh viên điểm cao nhất
    Manage.prototype.listStudentMaxScore = function () {
        var highScoreStudents = [];
        var currentStudent = this.heal;
        while (currentStudent !== null) {
            if (currentStudent.score >= 8) {
                highScoreStudents.push(currentStudent.getDataStudent());
                currentStudent == currentStudent.next;
            }
            else {
                currentStudent == currentStudent.next;
            }
        }
        return highScoreStudents;
    };
    //tìm kiếm cắc sinh viên theo tên;
    Manage.prototype.findByName = function (name) {
        var studentsNeedToFind = [];
        var currentStudent = this.heal;
        while (currentStudent !== null) {
            if (currentStudent.name == name) {
                studentsNeedToFind.push(currentStudent.getDataStudent());
                currentStudent = currentStudent.next;
            }
            else {
                currentStudent = currentStudent.next;
            }
        }
        return studentsNeedToFind;
    };
    return Manage;
}());
exports.Manage = Manage;
