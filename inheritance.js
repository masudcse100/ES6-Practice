class Parent{
  constructor(){
    this.fatherName = "Schwerznegger"
  }
}


class Child extends Parent{
  constructor(name){
    super();
    this.name = name;
  }
  getFullName(){
    return this.name +" "+ this.fatherName;
  }
}


const baby = new Child("John");
const baby2 = new Child("Smith");
console.log(baby);
console.log(baby2);
console.log(baby2.getFullName());
