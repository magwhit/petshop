function msg() {
  alert("Formulário enviado!");
}
function validateForm() {
  var nome, cpf, email, mot, gen;
  nome = document.getElementById('name').value;
  cpf = document.getElementById('cpf').value;
  email = document.getElementById('email').value;
  if (nome == "" || cpf == "" || email == "") {
    alert("Existem campos obrigatórios não preenchidos. Favor checar novamente");
    return false;
  }else{
  	msg();
  }
}