const campoEntrada = document.getElementById("campoEntrada");

const formTarefa = document.getElementById("formTarefa");

const listaTarefas = document.getElementById("listaTarefas");


function novaTarefa() {

    const nomeTarefa = campoEntrada.value.trim();


    // Verifica se o campo está vazio
    if (nomeTarefa === "") {

        campoEntrada.classList.add("input-erro");

        setTimeout(() => {
            campoEntrada.classList.remove("input-erro");
        }, 1500);

        return;
    }


    // Cria os elementos da tarefa
    const itemTarefa = document.createElement("li");

    const span = document.createElement("span");

    const btnExcluir = document.createElement("button");


    // Coloca o nome da tarefa
    span.innerText = nomeTarefa;


    // Coloca o ícone de lixeira
    btnExcluir.innerHTML = "<i class='bi bi-trash'></i>";


    // Acessibilidade do botão
    btnExcluir.setAttribute(
        "aria-label",
        "Excluir tarefa"
    );


    // Marcar tarefa como concluída
    span.onclick = (evento) => {

        evento.target.classList.toggle("concluida");

    };


    // Excluir tarefa
    btnExcluir.onclick = () => {

        listaTarefas.removeChild(itemTarefa);

    };


    // Adiciona os elementos dentro do li
    itemTarefa.appendChild(span);

    itemTarefa.appendChild(btnExcluir);


    // Adiciona a tarefa na lista
    listaTarefas.appendChild(itemTarefa);


    // Limpa o campo
    campoEntrada.value = "";
}


// Evento de envio do formulário
formTarefa.addEventListener("submit", (evento) => {

    evento.preventDefault();

    novaTarefa();

});