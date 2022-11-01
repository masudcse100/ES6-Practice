const firstName = "Justin";
const lastName = "TimberLake";
const fullName = firstName +" "+ lastName;

const fullName2 = `${firstName} ${lastName} ${5*3+10} is a good boy.`; // Es6 template is powerfull
console.log("User full Name: "+fullName);
console.log(fullName2);

const multiLine = "I love you\n"
  + "i miss you\n"
  + "I need you"; //old multiLine system

// Es6 template is powerfull
const multiLine2 = `I love you
I miss you
I don't need you`;
console.log(multiLine);
console.log("ES6 >>>\n"+multiLine2);
