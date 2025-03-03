
let amigos = [];
let inputNombre = document.getElementById ('amigo');
let listaAmigos = document.getElementById ("listaAmigos");
let resultadoAmigo = document.getElementById ("resultado");


function agregarAmigo() {
    let nombre = inputNombre.value.trim();
    if (nombre === ""){
    alert ("Por favor, inserte un nombre.");
    return; 
}

if(amigos.includes(nombre)) {
    alert ('Este nombre ya aparece en la lista');
    return;
}



    amigos.push(nombre);
    inputNombre.value = "";
    inputNombre.focus();
    listaAmigos.innerHTML = "";

    for (let i = 0; i <amigos.length; i++) {
        const itemAmigos = amigos[i];

        let listaCreada = document.createElement ('li');
        listaCreada.textContent= itemAmigos;
        listaAmigos.appendChild (listaCreada);
    } 
    
}


function sortearAmigo() {
    if (amigos.length === 1) {
        alert ('Por favor, agregar por lo menos 2 amigos');
        return;
    } 

    let amigoAleatorio = Math.floor(Math.random() * amigos.length);

    let amigoSorteado = amigos[amigoAleatorio];
    listaAmigos.innerHTML= "";
    
    resultadoAmigo.innerHTML = `<li> El amigo sorteado es: ${amigoSorteado} </li> ` 

}
