function salvar() {
  var nome = document.getElementById("nome").value
  var age = document.getElementById("age").value
  var lang = document.getElementById("lang").value
  var time = document.getElementById("time").value
  var son = document.getElementById("son").value
  var sex = document.getElementById("sex").value
  var sonage = document.getElementById("sonage").value
  var perfilimg = document.getElementById("perfilimg").value

  localStorage.setItem("user", nome)
  localStorage.setItem("firstage", age)
  localStorage.setItem("languages", lang)
  localStorage.setItem("timestaying", time)
  localStorage.setItem("son", son)
  localStorage.setItem("sex", sex)
  localStorage.setItem("secondage", sonage)
  localStorage.setItem("perfil", perfilimg)

  location.replace("https://luishzortea.github.io/foreignhtml/final.html")
}

function redefinir() {
  document.getElementById('nome').value = ''
  document.getElementById('age').value = ''
  document.getElementById('lang').value = ''
  document.getElementById('time').value = ''
  document.getElementById('son').value = ''
  document.getElementById('sex').value = ''
  document.getElementById('sonage').value = ''
  document.getElementById('perfilimg').src = 'perfil.png'
}
