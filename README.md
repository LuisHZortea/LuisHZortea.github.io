<div align="center">
 
  # Sobre o projeto
 
</div>

## JavaScript

- Os códigos utilizados para deixar o site funcional são os seguintes:

> - Dentro do **script.js**, ou seja, dentro do javascript da página inicial;

<pre>
function registro(){
  location.replace("https://luishzortea.github.io/foreignhtml/registro.html")
}

function login(){
  location.replace("https://luishzortea.github.io/foreignhtml/login.html")
}
</pre>

> Esse código se refere à página inicial, onde existem dois botões "Registro", e "Login", e a função de ambos é redirecionar o usuário para a página desejada.

> - E dentro da pasta **foreign.js**, onde existem dois scripts diferentes.

**foreignjs/registro.js**
<pre> 
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
</pre>

> Esse código se refere à página do usuário que pressionou o botão indicando que gostaria de se registrar. Na página o usuário irá preencher os campos de cadastro, sendo alguns opcionais, e por fim poderá salvar os dados, encerrando assim o seu cadastro. O botão utilizado para salvar os dados é referenciado com a função "salvar()" e guarda os dados localmente.

**foreignjs/login.js**
<pre>
function voltar() {
location.replace("https://luishzortea.github.io/index.html")
}
</pre>

> Caso o usuário tenha pressionado por engano o botão de "Login", haverá o botão "Cancelar" e ao pressiona-lo, esse código será ativado e o usuário retornará para a página inicial.

