<div align="center">
 
  # Sobre o projeto
 
</div>

## JavaScript

- Os códigos utilizados para deixar o site funcional são os seguintes:

> - Dentro do **script.js**, ou seja, dentro do javascript da página inicial;

<pre>
function preciso(){
  location.replace("https://luishzortea.github.io/foreignhtml/preciso.html")
}

function quero(){
  location.replace("https://luishzortea.github.io/foreignhtml/quero.html")
}
</pre>

> Esse código se refere à página inicial, onde existem dois botões "Preciso de Ajuda", e "Quero Ajudar", e a função de ambos é redirecionar o usuário para uma outra página que será ou de cadastro para abrigar, ou para ser abrigado.

> - E dentro da pasta **foreign.js**, onde existem dois scripts diferentes, mas que possuem funcionalidade semelhante.

**foreignjs/preciso.js**
<pre>
function salvar() {
  var nome = document.getElementById("nome").value
  var age = document.getElementById("age").value
  var lang = document.getElementById("lang").value
  var time = document.getElementById("time").value
  var son = document.getElementById("son").value
  var sex = document.getElementById("sex").value
  var sonage = document.getElementById("sonage").value

  localStorage.setItem("user", nome)
  localStorage.setItem("firstage", age)
  localStorage.setItem("languages", lang)
  localStorage.setItem("timestaying", time)
  localStorage.setItem("son", son)
  localStorage.setItem("sex", sex)
  localStorage.setItem("secondage", sonage)

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
}
</pre>

> Esse código se refere à página do usuário que pressionou o botão indicando que precisa de um abrigo. Na página o usuário irá preencher os campos de cadastro, sendo alguns opcionais, e por fim poderá salvar os dados, encerrando assim o seu cadastro. O botão utilizado para salvar os dados é referenciado com a função "salvar()" e guarda os dados localmente. Abaixo do botão salvar existe um outro pequeno botão escrito "Redefinir", e esse por sua vez é referenciado com a função "redefinir()", e ao ser pressionado, reinicia o preenchimento do formulário, apagando todos os dados informados até então.

**foreignjs/quero.js**

<pre>
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
  </pre>
  
  > Esse código se refere à página do usuário que pretende fazer o cadastro para abrigar refugiadas, e como dito previamente, possui funcionalidade semelhante ao código do usuário que precisa de abrigo. A diferença entre esse código e o outro, é justamente a diferença dos dados que serão informados no cadastro.
