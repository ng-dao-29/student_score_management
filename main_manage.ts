import {Manage} from "./manage";

let manage =new Manage();
manage.insertFirst("gió",10);
manage.insertLast("mây",7);
manage.insertFirst("bão",5);
manage.insertLast("sấm",4);
manage.insertFirst("mưa",4);
manage.insertFirst("gió",6)

// console.log(manage.showList())
// console.log(manage.totalStudentsFail())
console.log(manage.findByName("gió"))
