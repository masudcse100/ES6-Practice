fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((data) => displayData(data))
  .catch(error => console.log(error));

function displayData(alldata) {
  const userName = alldata.map(user => user.name);
  const p = document.getElementById('demo');
  for (let i=0; i < userName.length; i++){
    const user = userName[i];
    const li = document.createElement("li");
    li.innerText = user;
    p.appendChild(li);

  }
}
