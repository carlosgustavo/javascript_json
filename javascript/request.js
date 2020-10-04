let botao = document.querySelector("#botao");
let list = document.querySelector("#list");
var info = document.querySelector("#info");

api.addEventListener("click", function () {
  fetch("https://reqres.in/api/users?page=2")
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (response) {
      response.data.forEach(function (user) {
        let item = document.createElement("li");
        item.classList.add("info");

        item.addEventListener("click", function (event) {
          const usuario = event.target.closest("li");

          usuario.classList.add("fadeOut");

          setTimeout(function () {
            usuario.remove();
          }, 400);
        });

        item.innerHTML = `<img src="${user.avatar}"/> <br> <span>${user.first_name}</span> `;

        list.appendChild(item);
      });
    });
});
