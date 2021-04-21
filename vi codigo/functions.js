console.log("i worked :)");
function msg() {
  alert("Formulário enviado!");
  window.location.replace("../html/index.html");
}
function validateFormC() {
  var nome, cpf, email;
  nome = document.getElementById('name').value;
  cpf = document.getElementById('cpf').value;
  email = document.getElementById('email').value;
  if(nome == "" || cpf == "" || email == "") {
    alert("Existem campos obrigatórios não preenchidos. Favor checar novamente");
    return false;
  }else{
  	msg();
  }
}
function validateFormL() {
  var nome, cpf, email, pass, confpass;
  nome = document.getElementById('name').value;
  cpf = document.getElementById('cpf').value;
  email = document.getElementById('email').value;
  pass = document.getElementById('senha').value;
  confpass = document.getElementById('confirma').value;
  if(nome == "" || cpf == "" || email == "" || pass == "" || confpass == ""){
    alert("Existem campos obrigatórios não preenchidos. Favor checar novamente");
    return false;
  }else{
  	if(pass != confpass){
  		alert("As senhas não são iguais. Favor, digite novamente");
  	}else{
  		msg();
  	}
  }
}