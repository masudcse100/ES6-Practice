const addStudent = {name:'test...',stdclass:345,roll:405,city:'Mymansing'}
fetch('http://localhost:8000/students/',{
  method:'POST',
  body: JSON.stringify(addStudent),
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
})
.then(response => response.json()) // converts the response to JSON
.then(data => console.log(data))

  // console.log(data);
  function displayUser(students){
    // console.log("Students ",students);
    const stdNames = students.map(student => student.name);
    const p = document.getElementById('demo');
    for (let i=0; i < stdNames.length; i++){
      const student = stdNames[i];
      const li = document.createElement("li");
      li.innerText = student;
      p.appendChild(li);
      }
    }


    // fetch('http://localhost:8000/students/')
    // .then(response => response.json()) // converts the response to JSON
    // .then(data => {
    //   console.log(data);
    // });
