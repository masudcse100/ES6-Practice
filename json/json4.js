document.getElementById('submitBtn').addEventListener("click", function () {
  // console.log("click");
  const titleText = document.getElementById("title").value;
  const desText = document.getElementById("des").value;
  // console.log(titleText, desText);
  const post = {title:title,body:title};
  createPost(post);
  console.log(post);
});

// const post = {title:"foooo",body:"barrrrr"}
function createPost(post) {
  fetch('https://jsonplaceholder.typicode.com/posts',{
      method: 'POST',
      body: JSON.stringify(post),
      headers: {
        "Content-ttype": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => console.log(data))
    // .then((data) => displayData(data))
    .catch(error => console.log(error));
}
