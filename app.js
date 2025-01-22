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

function sortearAmigo() {
    if(amigos.length === 0 || amigos.length === 1){
        alert('Digite o nome de pelo menos 2 amigos');
    }
    else {
        let amigoSecreto = Math.floor(Math.random() * amigos.length);
        document.getElementById('resultado').innerHTML = amigos[amigoSecreto];
        amigos.splice(amigoSecreto, 1);
        criarLista();
    }
}