const person = {
  name: 'Jack William',
  age:25,
  job: 'Meta',
  phone: 112233,
  address: '112 Milan City',
  friends:['Tom hancks', 'Tom Cruise', 'Tom Yearn']
};

//console.log(person);
// const name = person.name;
// const phone = person.phone;
// const {name,phone, address,friends} = person;
// const {name,phone, address,friends, salary=200000} = person;
// console.log(name, phone,salary, address, friends);

const complexObject = {
  name: 'abc',
  info:{
    city: 'Dhaka',
    salary: '25000'
  }
}
const {salary} = complexObject.info;
console.log(salary);
// -------------------------------------------------------

// Array destructure
const friends = ['Sakib', 'Musfiq','Tamim', 'Bijoy', 'Mehedi']

// const [richFrnd,poorFrnd] = friends;
// console.log(richFrnd,poorFrnd);
const [...allfriend] = friends;
console.log(typeof(allfriend));
console.log("All Friends ==> " + allfriend);

const [richFrnd,poorFrnd, ...restFrnd] = friends;
console.log(restFrnd);
