// Seleção de elementos do DOM
const imgPreferencia = document.getElementById("imgPreferencia");
const formCadastro = document.getElementById("formCadastro");
const sectionDados = document.getElementById("sectionDados");

function renderizarDados(nome, email, idade, senha, urlImagem){
  const lista = document.createElement("ul")
  const itemNome = document.createElement("li")
  const itemEmail = document.createElement("li")
  const itemIdade = document.createElement("li")
  const itemSenha = document.createElement("li")
  const itemUrlimagem = document.createElement("li")
  
  itemNome.textContent = "Nome: " + nome;
  itemEmail.textContent = "Email: " + email;
  itemIdade.textContent = "Idade: " + idade;
  itemSenha.textContent = "Senha: " + "*".repeat(senha.length);
  itemUrlimagem.textContent = "Url Imagem: " + urlImagem;

  lista.appendChild(itemNome);
  lista.appendChild(itemEmail);
  lista.appendChild(itemIdade);
  lista.appendChild(itemSenha);
  lista.appendChild(itemUrlimagem);

  sectionDados.appendChild(lista);
}

function cadastrarDados(evento) {
  evento.preventDefault(); // previne o refresh da página

  let nome = formCadastro.getElementById("email").value;
  let email = formCadastro.getElementById("email").value;
  let senha = formCadastro.getElementById("senha").value;
  let idade = Number(formCadastro.getElementById("idade").value);
  let urlImagem = formCadastro.getElementById("urlImagem").value;

  imgPreferencia.src = urlImagem;

  renderizarDados(nome, email, idade, senha, urlImagem);

  // alert("Opa, virus detectado!");
}

formCadastro.addEventListener("submit", cadastrarDados);