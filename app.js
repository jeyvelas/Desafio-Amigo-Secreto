// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigos (){
    const inputamigo = document.getElementById('amigo');
    const nombreAmigo = inputamigo.value.trim();

    if (nombreAmigo === ""){
        alert('Por favor inserte un Nombre');
        return; 
    }
    // Agregar el nombre al array. 
    amigos.push(nombreAmigo);
    // Actualizar la lista visual. 
    actualizarLista();
    // Limpiar los campos de entrada 
    inputamigo.value = "";
    inputamigo.focus();

}
// Esta función es para actualizar toda la lista visual. 
function actualizarLista() {
    const listaAmigosUl = document.getElementById('listaAmigos');
    listaAmigosUl.innerHTML = ""; 

    amigos.forEach (amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        //appendChild sirve para cuando se agregue un elemento nuevo, siga un parrafó y se visualice en forma de lista.
        listaAmigosUl.appendChild(li);
    })
}

function sortearAmigo(){
    if(amigos.length === 0){
        alert ('No hay amigos para sortear. Agregar nombres.');
        return; 
    }

    const indiceAleatorio  = Math.floor(Math.random () * amigos.length);

    const amigoSorteado  = amigos[indiceAleatorio];

    const resultadoUl = document.getElementById ('resultado'); 
    resultadoUl.innerHTML = `<li>${amigoSorteado}</li>`;

}
function nuevaLista() {
    if (amigos.length !='') {
    location.reload();
    amigos.splice(0,amigos.length);
    } else {
        alert('La lista se encuentra vacia.');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btnAdicionar').addEventListener('click', agregarAmigos);
    document.getElementById('btnSortear').addEventListener('click', sortearAmigo); 
});
