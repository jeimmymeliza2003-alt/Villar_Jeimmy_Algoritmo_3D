// Algoritmo base tipo CourseMash adaptado a Impresión 3D

const modelos3D = [
    { nombre: "Soporte para celular", votos: 0 },
    { nombre: "Maceta geométrica", votos: 0 },
    { nombre: "Organizador de escritorio", votos: 0 },
    { nombre: "Figura articulada", votos: 0 },
    { nombre: "Llavero personalizado", votos: 0 },
    { nombre: "Soporte para auriculares", votos: 0 },
    { nombre: "Caja decorativa", votos: 0 },
    { nombre: "Porta cables", votos: 0 },
    { nombre: "Mini busto personalizado", votos: 0 },
    { nombre: "Molde para repostería", votos: 0 }
];

let indiceA;
let indiceB;

// Genera comparación A/B aleatoria
function generarComparacion() {

    indiceA = Math.floor(Math.random() * modelos3D.length);

    do {
        indiceB = Math.floor(Math.random() * modelos3D.length);
    } while (indiceA === indiceB);

    document.getElementById("modeloA").innerText = modelos3D[indiceA].nombre;
    document.getElementById("modeloB").innerText = modelos3D[indiceB].nombre;
}

// Cuando el usuario vota
function votar(opcion) {

    if (opcion === "A") {
        modelos3D[indiceA].votos++;
    } else {
        modelos3D[indiceB].votos++;
    }

    actualizarRanking();
    generarComparacion();
}

// Actualiza ranking ordenado por votos
function actualizarRanking() {

    const lista = document.getElementById("ranking");
    lista.innerHTML = "";

    const ordenados = [...modelos3D].sort((a, b) => b.votos - a.votos);

    ordenados.forEach(modelo => {
        const li = document.createElement("li");
        li.innerText = modelo.nombre + " — " + modelo.votos + " votos";
        lista.appendChild(li);
    });
}

// Inicializa algoritmo
generarComparacion();
actualizarRanking();
