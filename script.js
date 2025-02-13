let tarefas = [];

function adicionarTarefa(){
    let tarefaInput = document.getElementById("tarefaInput");
    let textoTarefa = tarefaInput.value.trim();

    if (textoTarefa === "") {
        alert("Por favor, digite uma tarefa!");
    }

    tarefas.push(textoTarefa);
    tarefaInput.value = "";

    updateListaTarefa();
}

function deleteTarefa(index) {
    tarefas.splice(index, 1);
    updateListaTarefa();
}

function updateListaTarefa() {
    let listaTarefa = document.getElementById("listaTarefa");
    listaTarefa.innerHTML = "";

    tarefas.forEach((tarefa, index) => {
        let tarefaDiv = document.createElement("div");
        tarefaDiv.className = "tarefa";
        tarefaDiv.innerHTML = `
        <span>${tarefa}</span>
        <button onclick="deleteTarefa(${index})">Remover</button>
        `;
        listaTarefa.appendChild(tarefaDiv);
    });
}