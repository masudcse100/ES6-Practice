fetch('http://localhost:8000/students/')
.then(response => response.json()) // converts the response to JSON
.then(data => displayUser(data))
  // console.log(data);
  function displayUser(students){
    // console.log("Students ",students);
    const stdNames = students.map(student => student.name);
    const ul = document.getElementById('stds-container');
    for (let i=0; i < stdNames.length; i++){
      const student = stdNames[i];
      const li = document.createElement("li");
      li.innerText = student;
      ul.appendChild(li);
      }
    }


    // fetch('http://localhost:8000/students/')
    // .then(response => response.json()) // converts the response to JSON
    // .then(data => {
    //   console.log(data);
    // });
