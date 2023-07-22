fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((user) => {
      const p = document.createElement("p");
      p.textContent = `Nombre: ${user.name}, Email: ${user.email}`;
      document.body.appendChild(p);
    });
  })

  .catch((error) => {
    console.log("Ha ocurrido un error:", error);
  });
