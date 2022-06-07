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

function redefinir() {
  document.getElementById('nomec').value = ''
  document.getElementById('email').value = ''
  document.getElementById('idade').value = ''
  document.getElementById('linguas').value = ''
  document.getElementById('tempo').value = ''
  document.getElementById('filhos').value = ''
  document.getElementById('sexo').value = ''
  document.getElementById('idadef').value = ''
}
