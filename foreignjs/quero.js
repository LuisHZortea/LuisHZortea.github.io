function salvar(){
    var nome = document.getElementById("nome").value
    var age = document.getElementById("age").value
    var lang = document.getElementById("lang").value
    var time = document.getElementById("time").value
    var cpf = document.getElementById("cpf").value
    var adress = document.getElementById("adress").value
    var morador = document.getElementById("morador").value
  
    localStorage.setItem("user", nome)
    localStorage.setItem("firstage", age)
    localStorage.setItem("languages", lang)
    localStorage.setItem("timestaying", time)
    localStorage.setItem("cpf", cpf)
    localStorage.setItem("adress", adress)
    localStorage.setItem("morador", morador)
  
    location.replace("https://luishzortea.github.io/foreignhtml/final.html")
  }
  
  function redefinir(){
    document.getElementById('nome').value = ''
    document.getElementById('age').value = ''
    document.getElementById('lang').value = ''
    document.getElementById('time').value = ''
    document.getElementById('cpf').value = ''
    document.getElementById('adress').value = ''
    document.getElementById('morador').value = ''
  }
