import {Student} from "./Student";

export class Manage<S, N> {
    protected heal: Student<string, number> | null;
    protected tail: Student<string, number> | null;
    protected size : number;
    constructor() {
        this.heal = null;
        this.tail = null;
        this.size = 0;
    }
    // thêm 1 nút vào đầu
     insertFirst(name: string,score: number): void {
        let student = new Student(name,score);
        student.next = this.heal;
        this.heal = student;

        if (!this.tail) {
            this.tail = student;
        }
        this.size++;
    }

    //thêm 1 nút vào cuối
     insertLast(name:string, score:number):void {
        if (!this.heal) {
            this.insertFirst(name,score);
        }
        else {
            let student = new Student(name,score);
            this.tail.next = student;
            this.tail = student;
            this.size++
        }
    }
    //hiển thị danh sách
     showList(): S | N []  {
        let arraystudent = [];
        let currentStudent = this.heal;

        while (currentStudent !== null) {
            arraystudent.push(currentStudent.getDataStudent());
            currentStudent = currentStudent.next
        }
        return arraystudent;
    }
    //để đếm xem trong danh sách có bao nhiêu sinh viên thi lại (điểm ≤ 5)
    totalStudentsFail(): S | N [] {
        let studentRetest = [];
        let amount = 0;
        let currentStudent = this.heal
        while (currentStudent !== null) {
            if (currentStudent.score <= 5) {
                studentRetest.push(currentStudent.getDataStudent());
                currentStudent = currentStudent.next
                amount++
            }else {
                currentStudent = currentStudent.next
            }
        }
        return studentRetest;
    }
    //hiện thị cắc sinh viên điểm cao nhất
    listStudentMaxScore(): S | N [] {
        let highScoreStudents = [];
        let currentStudent = this.heal;
        while (currentStudent !== null) {
            if (currentStudent.score >=8) {
                highScoreStudents.push(currentStudent.getDataStudent());
                currentStudent == currentStudent.next
            }else {
                currentStudent == currentStudent.next
            }
        }
        return highScoreStudents
    }
    //tìm kiếm cắc sinh viên theo tên;
    findByName(name:string): S | N [] {
        let studentsNeedToFind = []
        let currentStudent = this.heal;
        while (currentStudent == null) {
            if (currentStudent.name == name) {
                console.log(currentStudent.getDataStudent());
                currentStudent = currentStudent.next;
            }
            else {
                currentStudent = currentStudent.next;
            }
        }
        return studentsNeedToFind
    }
}