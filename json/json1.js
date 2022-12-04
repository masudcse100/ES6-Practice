const user = {
  name: "Masud",
  address:'Dhaka',
  Email: 'masud@me.com',
  contact:{
    phone:01766789,
    Telephone:678898
  },
  companyInfo:{
    position: 'Software Engineer',
    salay:55000,
    workingDays: ['sun','mon','tue','wed','thus']
  }
}

const userdata = JSON.stringify(user);
console.log(userdata);
const UserFromdata = JSON.parse(userdata);
console.log(UserFromdata);
