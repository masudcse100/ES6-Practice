class Student{
  constructor(sId,sName){
    this.id = sId;
    this.name = sName;
    this.school = "Bogura Zilla School";
  }
}

const student1 = new Student(11,"Masud");
const student2 = new Student(23,"Rabbi");
const student3 = new Student(21,"Bappi");
console.log(student1,student2,student3);
// ----------------------------------
console.log(student1.name,student2.name);
