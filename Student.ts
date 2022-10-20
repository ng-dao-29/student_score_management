import {Istudent} from "./Istudent";

export class Student<S,N> implements Istudent<S,N> {
     name: S;
     score: N;
     next: Student<S,N> | null =null;
    constructor(name:S,score:N) {
        this.name = name;
        this.score = score;
    }
    getDataStudent() {
        return `sinh viên: ${this.name} || đạt mức điểm là : ${this.score}`
    }
}