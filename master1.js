// const
  const test = "ES6 Test"; //value no change
  console.log(test);
  const numbers = [20,35] // number value change arry
  numbers[1] = 50;
  numbers.push(75);
  numbers.push('Rana');
  //numbers = ['x','y','z'] // full array can't be change
  console.log(numbers);
  const nayok = {name: 'sakib', phone:35325};
  console.log(nayok);

  // let can be the change value (called scope variable)
  let patientName = "Karim";
  patientName = "Rabbi";
  console.log('Patient Name:'+ " "+ patientName);
  let sum = 0;
  for(var i=0; i<10;i++){ //let not to be leck
    sum +=i;
  }
  console.log(i);
