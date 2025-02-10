let listAmigosAgregado = [];

function agregarAmigo() {
  // Lleno mi array con los amigos que se van agregando.
  let amigoAgregado = document.getElementById("amigo").value;

  if (amigoAgregado != "") {
    listAmigosAgregado.push(amigoAgregado);

    // Agregamos el amigo agrego a lista html.
    document.getElementById("listaAmigos").removeAttribute("hidden");

    agregarElementoLista("listaAmigos", amigoAgregado);

    limpiarInput();

    // volvemos a habilitar boton de sortear
    document.querySelector(".button-draw").removeAttribute("disabled");

  } else {
    alert("Debe introducir un valor valido.");
  }
}

function limpiarInput() {
  document.getElementById("amigo").value = "";
}

function sortearAmigo() {
  let cantAmigos = listAmigosAgregado.length;

  // Si hay elementos sorteamos amigo, si no, mostramos mensaje
  if (cantAmigos > 0) {
    let numeroElegido = Math.floor(Math.random() * cantAmigos);

    document.getElementById("listaAmigos").setAttribute("hidden", true);

    // obtenemos el amigo que se encuentra en la posición ganadora
    let amigoGanador = listAmigosAgregado[listAmigosAgregado.length - 1];

    // Imprimimos en pantalla amigo ganador.
    agregarElementoLista("resultado", "El amigo sorteado a sido: " + amigoGanador);

    // habilito boton de "Nuevo sorteo"
    document.querySelector(".button-restart").removeAttribute("disabled");

    // deshabilito a habilitar boton de sortear
    document.querySelector(".button-draw").setAttribute("disabled", true);

    //deshabilitamps boton agregar.
    document.querySelector(".button-add").setAttribute("disabled", true);

  }else{
    alert("No has añadido a ningun amigo.");
  }
}

function agregarElementoLista(nomLista, valor) {
  let elemento = document.createElement("li");
  elemento.appendChild(document.createTextNode(valor));
  document.getElementById(nomLista).appendChild(elemento);
}


function reiniciarSorteo(){
    listAmigosAgregado = [];
    
    var ul = document.getElementById("resultado");
    while(ul.firstChild) ul.removeChild(ul.firstChild);
    
    var ul = document.getElementById("listaAmigos");
    while(ul.firstChild) ul.removeChild(ul.firstChild);
    
    //habilito boton agregar.
    document.querySelector(".button-add").removeAttribute("disabled");
}