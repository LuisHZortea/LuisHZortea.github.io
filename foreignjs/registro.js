function salvar() {
  var nome = document.getElementById("nomec").value
  var email = document.getElementById("email").value
  var idade = document.getElementById("idade").value
  var linguas = document.getElementById("linguas").value
  var tempo = document.getElementById("tempo").value
  var filhos = document.getElementById("filhos").value
  var sexo = document.getElementById("sexo").value
  var idadef = document.getElementById("idadef").value

  localStorage.setItem("nomec", nome)
  localStorage.setItem("email", email)
  localStorage.setItem("idade", idade)
  localStorage.setItem("linguas", linguas)
  localStorage.setItem("tempo", tempo)
  localStorage.setItem("filhos", filhos)
  localStorage.setItem("sexo", sexo)
  localStorage.setItem("idadef", idadef)

  location.replace("https://luishzortea.github.io/foreignhtml/final.html")
}
