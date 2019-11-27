var campoFiltro = document.querySelector("#filtrar-usuario");
campoFiltro.addEventListener("input", function() {
  var usuarios = document.querySelector("#list").children;
  if (this.value.length > 0) {
    for (var i = 0; i < usuarios.length; i++) {
      var usuario = usuarios[i];
      let span = usuario.querySelector("span");
      var nome = span.innerText;
      console.log("nome; ", nome);
      var expressao = new RegExp(this.value, "i");

      if (!expressao.test(nome)) {
        usuario.classList.add("invisivel");
      } else {
        usuario.classList.remove("invisivel");
      }
    }
  } else {
    for (var i = 0; i < usuarios.length; i++) {
      var usuario = usuarios[i];
      usuario.classList.remove("invisivel");
    }
  }
});
/* var bt = document.getElementById("botao-info");
bt.addEventListener("click", function() {
  alert("Click no usuario para remover ");
}); */
