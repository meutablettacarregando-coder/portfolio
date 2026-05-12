// Validação simples do formulário de contato
function validarFormulario() {
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const mensagem = document.getElementById("mensagem").value;

  if (nome === "" || email === "" || mensagem === "") {
    alert("Por favor, preencha todos os campos.");
    return false;
  }

  // Regex simples para validar email
  const regexEmail = /\S+@\S+\.\S+/;
  if (!regexEmail.test(email)) {
    alert("Digite um e-mail válido.");
    return false;
  }

  alert("Mensagem enviada com sucesso!");
  return true;
}
