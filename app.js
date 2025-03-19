// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
  let nombreAmigo = document.getElementById("amigo").value.trim();
  let nombreAmigoLower = nombreAmigo.toLowerCase(); // Convertir a minúsculas para comparación

  // Si el nombre está vacío, mostrar una alerta
  if (nombreAmigo === "") {
    alert("Por favor, inserte un nombre");
  } 
  // Si el nombre tiene números, mostrar una alerta
  else if (/[0-9]/.test(nombreAmigo)) {
    alert("El nombre no debe contener números");
  } 
  // Si el nombre ya está en la lista (sin importar mayúsculas/minúsculas), mostrar una alerta
  else if (amigos.some(amigo => amigo.toLowerCase() === nombreAmigoLower)) {
    alert("El nombre ya está en la lista, ingrese otro");
  }
  // Si el nombre es válido, agregarlo a la lista
  else {
    amigos.push(nombreAmigo);
    document.querySelector("#amigo").value = "";
    mostrarListaAmigo();
  }
}

function mostrarListaAmigo() {
  let listaAmigos = document.querySelector("#listaAmigos");
  listaAmigos.innerHTML = "";

  amigos.forEach(amigo => {
    let listaHTML = document.createElement("li");
    listaHTML.textContent = amigo;
    listaAmigos.appendChild(listaHTML);
  });
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Por favor, inserte un nombre antes de sortear");
  } else {
    let indiceAmigo = Math.floor(Math.random() * amigos.length);
    document.querySelector("#resultado").innerHTML = "El amigo secreto sorteado es: " + amigos[indiceAmigo];
  }
}

// Permitir agregar un amigo al presionar la tecla Enter
document.getElementById("amigo").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    agregarAmigo();
  }
});