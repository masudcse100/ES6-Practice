// const addStudent = {name:'test...',stdclass:345,roll:405,city:'Mymansing'}
document.getElementById('submitBtn').addEventListener("click", function () {
  // console.log("click");
  const stdName = document.getElementById("stdName").value;
  const stdClass = document.getElementById("stdClass").value;
  const stdRoll = document.getElementById("stdRoll").value;
  const stdCity = document.getElementById("stdCity").value;
  // console.log(stdName, stdClass, stdRoll, stdCity);
  const addStudent = {name:stdName,stdclass:stdClass,roll:stdRoll,city:stdCity};
  createPost(addStudent);
});

function createPost(addStudent) {
  fetch('http://localhost:8000/students/',{
    method:'POST',
    body: JSON.stringify(addStudent),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json()) // converts the response to JSON
  .then(data => console.log(data))
}
