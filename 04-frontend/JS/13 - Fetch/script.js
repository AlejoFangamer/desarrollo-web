fetch("https://jsonplaceholder.typicode.com/comments/1")
  .then((info) => info.json())
  .then((response) => {
    console.log(response.postId);
  })
  .catch((error) => {
    console.log(error);
  });
