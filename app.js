let amigos = [];

function adicionarAmigo() {
    let amigo = document.getElementById('amigo');
    if (amigo.value === '') {
        alert('Por favor, insira um nome válido');
    } else {
        amigos.push(amigo.value);
        amigo.value = '';
        criarLista();
    }
}

function criarLista() {
    let nome = '';
    let lista  = document.getElementById('listaAmigos');
    amigos.forEach(amigo => {
        nome += '<li>' + amigo + '</li>';
    });
    lista.innerHTML = nome;
}