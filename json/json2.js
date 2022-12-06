fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((data) => displayData(data));

function displayData(alldata) {
  const postTitle = alldata.map(titles => [titles.id, titles.title]);
  const p = document.getElementById('demo');
  for (let i=0; i < postTitle.length; i++){
    const titles = postTitle[i];
    const li = document.createElement("li");
    li.innerText = titles;
    p.appendChild(li);

  }
}
