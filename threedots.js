// spread operator
const ages = [12,24,18,20];
const ages2 = [15,16,25];
const ages3 = [34,39,41,50];
// const allAges = ages.concat(ages2).concat(ages3);
// const allAges = ages.concat(ages2).concat([5]).concat(ages3);
// const allAges2 = [ages,ages2,5,ages3]
const allAges2 = [...ages,...ages2,5,...ages3]
console.log(allAges2);
// -------------------------------
const business = 650;
const minister = 450;
const sochib = 840;
const maximum = Math.max(business,minister,sochib);
console.log(maximum);
// ---------------------------------
const salery = [650,450,976,753];
const salerymax = Math.max(...salery);
console.log(salerymax);
