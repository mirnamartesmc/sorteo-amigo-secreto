// Array para almacenar los nombres
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
  const input = document.querySelector("#amigo"); // Campo de texto
  const nombre = input.value.trim(); // Elimina espacios extra
  
  if (nombre === "") {
    alert("Por favor, ingresa un nombre válido.");
    return; // Salir si no hay nombre
  }
  
  // Agregar el nombre al array
  amigos.push(nombre);
  
  // Mostrar el nombre en la lista
  const lista = document.querySelector("#listaAmigos");
  const li = document.createElement("li");
  li.textContent = nombre;
  li.classList.add("name-item"); // Clase CSS para estilos
  lista.appendChild(li);

  // Limpiar el campo de texto
  input.value = "";
}

// Función para sortear un amigo
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("No hay nombres en la lista para sortear.");
    return;
  }
  
  // Selección aleatoria
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSecreto = amigos[indiceAleatorio];

  // Mostrar el resultado en la lista de resultados
  const resultado = document.querySelector("#resultado");
  resultado.textContent = `El amigo secreto es: ${amigoSecreto}`;
}


