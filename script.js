function crearSeccionGato(imgSrc, gatoNombre, gatoDescripcion, gatoId) {
    const main = document.querySelector("main");

    const seccionGato = document.createElement("section");
    seccionGato.className = "gato";

    const img = document.createElement("img");
    img.src = imgSrc;
    img.alt = gatoNombre;

    const h2 = document.createElement("h2");
    h2.textContent = gatoNombre;

    const p = document.createElement("p");
    p.textContent = gatoDescripcion;

    const divComentarios = document.createElement("div");
    divComentarios.className = "comentarios";

    const h3Comentarios = document.createElement("h3");
    h3Comentarios.textContent = "Comentarios:";

    const ulComentarios = document.createElement("ul");
    ulComentarios.id = `comentarios-${gatoId}`;

    const inputComentario = document.createElement("input");
    inputComentario.type = "text";
    inputComentario.id = gatoId;
    inputComentario.placeholder = "Añadir comentario";

    const botonAñadir = document.createElement("button");
    botonAñadir.className = "btn";
    botonAñadir.textContent = "Añadir";
    botonAñadir.onclick = function () {
        agregarComentario(gatoId);
    };
    
    divComentarios.appendChild(h3Comentarios);
    divComentarios.appendChild(ulComentarios);
    divComentarios.appendChild(inputComentario);
    divComentarios.appendChild(botonAñadir);

    seccionGato.appendChild(img);
    seccionGato.appendChild(h2);
    seccionGato.appendChild(p);
    seccionGato.appendChild(divComentarios);

    main.appendChild(seccionGato);
}

crearSeccionGato("img/a.jpeg", "Gato 1", "Gato Bañao", 1);
crearSeccionGato("img/b.jpeg", "Gato 2", "Gato asustao", 2);
crearSeccionGato("img/c.jpeg", "Gato 3", "Gato preocupao", 3);
crearSeccionGato("img/d.jpeg", "Gato 4", "Gato raro", 4);

// Función para aplicar estilos CSS a elementos
function aplicarEstilos(elemento, estilos) {
    for (const propiedad in estilos) {
        elemento.style[propiedad] = estilos[propiedad];
    }
}

// Aplicar estilos a elementos usando la función aplicarEstilos
aplicarEstilos(document.body, {
    fontFamily: "Arial, sans-serif",
    margin: "0",
    padding: "0",
    minHeight: "100vh"
});

aplicarEstilos(document.querySelector("header"), {
    backgroundColor: "#333",
    color: "white",
    textAlign: "center",
    padding: "10px"
});

aplicarEstilos(document.querySelector("nav"), {
    backgroundColor: "#333",
    color: "white",
    padding: "10px"
});

const enlacesNav = document.querySelectorAll("nav ul li a");
enlacesNav.forEach(function (enlace) {
    aplicarEstilos(enlace, {
        textDecoration: "none",
        transition: "color 0.5s"
    });
});

enlacesNav.forEach(function (enlace) {
    enlace.addEventListener("mouseover", function () {
        aplicarEstilos(enlace, {
            color: "#afafaf"
        });
    });

    enlace.addEventListener("mouseout", function () {
        aplicarEstilos(enlace, {
            color: "white"
        });
    });
});

aplicarEstilos(document.querySelector("nav ul"), {
    listStyleType: "none",
    display: "flex",
    justifyContent: "space-around"
});

const enlaces = document.querySelectorAll("nav a");
enlaces.forEach(function (enlace) {
    aplicarEstilos(enlace, {
        textDecoration: "none",
        color: "white"
    });
});

aplicarEstilos(document.querySelector("main"), {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px"
});

const seccionesGato = document.querySelectorAll(".gato");
seccionesGato.forEach(function (seccion) {
    aplicarEstilos(seccion, {
        maxWidth: "100%",
        border: "1px solid #ddd",
        padding: "10px",
        margin: "10px",
        textAlign: "center",
        cursor: "pointer"
    });
});

const imagenesGato = document.querySelectorAll(".gato img");
imagenesGato.forEach(function (imagen) {
    aplicarEstilos(imagen, {
        maxWidth: "100%",
        width: "300px",
        height: "280px"
    });
});

aplicarEstilos(document.querySelector("footer"), {
    backgroundColor: "#333",
    color: "white",
    textAlign: "center",
    padding: "10px",
    bottom: "0",
    width: "100%"
});

const inputs = document.querySelectorAll("input");
inputs.forEach(function (input) {
    aplicarEstilos(input, {
        width: "80%",
        padding: "0 5px",
        marginBottom: "15px",
        border: "none",
        background: "none",
        outline: "none",
        borderBottom: "2px solid #000",
        textTransform: "uppercase",
        fontWeight: "bold"
    });
});

const placeholders = document.querySelectorAll("input::placeholder");
placeholders.forEach(function (placeholder) {
    aplicarEstilos(placeholder, {
        color: "#000"
    });
});

const botones = document.querySelectorAll(".btn");
botones.forEach(function (boton) {
    aplicarEstilos(boton, {
        backgroundColor: "#333",
        color: "white",
        border: "none",
        padding: "10px 20px",
        textTransform: "uppercase",
        fontWeight: "bold",
        cursor: "pointer",
        fontSize: "10px",
        borderRadius: "5px",
        transition: "box-shadow 0.5s ease",
        margin: "0 auto"
    });

    boton.addEventListener("mouseover", function () {
        aplicarEstilos(boton, {
            boxShadow: "0 0 5px 7px rgba(51, 51, 51, 0.7)"
        });
    });

    boton.addEventListener("mouseout", function () {
        aplicarEstilos(boton, {
            boxShadow: "none"
        });
    });
});

const gatos = document.querySelectorAll('.gato');

// Función para cambiar el color de fondo de las secciones de gatos al hacer clic en ellas
function cambiarColorDeFondo(event) {
    const seccionGato = event.currentTarget;
    const colores = ['#FF5733', '#33FF57', '#5733FF', '#FFFF33', '#F600FE', '#00FEE3 '];
    const nuevoColor = colores[Math.floor(Math.random() * colores.length)];
    seccionGato.style.transition = 'background-color 1.5s ease';
    seccionGato.style.backgroundColor = nuevoColor;
}

gatos.forEach((gato) => {
    gato.addEventListener('click', cambiarColorDeFondo);
});

const encabezado = document.querySelectorAll('li');

// Función para cambiar el color de fondo de las secciones de encabezado al hacer clic en ellas
function cambiarColor(event) {
    const texto = event.currentTarget;
    const colores = ['#FF5733', '#33FF57', '#5733FF', '#a2a20d', '#F600FE'];

    const nuevoColor = colores[Math.floor(Math.random() * colores.length)];
    texto.style.transition = 'background-color 1.5s ease';
    texto.style.borderRadius = '4px';
    texto.style.backgroundColor = nuevoColor;
    texto.style.padding = '8px';
}

encabezado.forEach((encabezados) => {
    encabezados.addEventListener('click', cambiarColor);
});

// Función para agregar un comentario
function agregarComentario(gatoId) {
    const comentarioInput = document.getElementById(`${gatoId}`);
    const comentarioTexto = comentarioInput.value;

    if (comentarioTexto.trim() !== '') {
        const comentarioList = document.getElementById(`${gatoId}`);
        const nuevoComentario = document.createElement('li');
        nuevoComentario.textContent = comentarioTexto;
        comentarioList.appendChild(nuevoComentario);

        comentarioInput.value = '';
    }
}

