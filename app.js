// Array donde se almacenarán los nombres de los amigos
let amigos = [];

/**
 * Función para agregar un amigo a la lista
 */
function agregarAmigo() {
    // Capturar el valor del input
    let inputNombre = document.getElementById("amigo");
    let nombre = inputNombre.value.trim();

    // Validar que no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Agregar al array
    amigos.push(nombre);

    // Limpiar el campo de entrada
    inputNombre.value = "";

    // Actualizar la lista en el DOM
    actualizarLista();
}

// Detectar la tecla Enter en el campo de entrada
document.getElementById("amigo").addEventListener("keydown", function(event) {
    if (event.key === "Enter") { // Verifica si la tecla presionada es Enter
        agregarAmigo(); // Llama a la función para agregar el nombre
    }
});


/**
 * Función para actualizar la lista en la interfaz
 */
function actualizarLista() {
    // Seleccionar el elemento de la lista
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar contenido previo

    // Recorrer el array de amigos y agregar cada nombre como <li>
    amigos.forEach((amigo) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

/**
 * Función para realizar el sorteo aleatorio
 */
function sortearAmigo() {
    // Validar que haya al menos dos amigos en la lista
    if (amigos.length < 2) {
        alert("Debe agregar al menos dos amigos para realizar el sorteo.");
        return;
    }

    // Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre del amigo sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en el DOM
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `🎉 El amigo secreto es: <strong>${amigoSorteado}</strong> 🎉`;
}

/**
 * Función para reiniciar el sorteo
 */
function reiniciarSorteo() {
    // Vaciar el array de amigos
    amigos = [];

    // Actualizar la lista en la interfaz
    actualizarLista();

    // Limpiar el resultado del sorteo
    document.getElementById("resultado").innerHTML = "";
}