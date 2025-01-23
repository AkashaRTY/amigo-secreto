let amigos = [];
let amigo = document.getElementById('amigo');

amigo.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        adicionarAmigo();
    }   
});

function adicionarAmigo() {
    if (amigo.value === '') {
        alert('Por favor, insira um nome válido');
    } else {
        amigos.push(amigo.value);
        amigo.value = '';
        criarLista();
    }
}

function removerAmigo(id) {
    amigos.splice(id, 1);
    criarLista();
}

function criarLista() {
    let nome = '';
    let lista  = document.getElementById('listaAmigos');
    amigos.forEach((amigo, id) => {
        nome += `<li> ${amigo} <a color='red' onclick='removerAmigo(${id})'>Remover</a></li> `;
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
        removerAmigo(amigoSecreto);
    }
}