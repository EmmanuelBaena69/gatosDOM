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

// Función para agregar un comentario a una sección de gato
function agregarComentario(gatoId) {
    const comentarioInput = document.getElementById(`${gatoId}`);
    const comentarioTexto = comentarioInput.value;

    if (comentarioTexto.trim() !== '') {
        const comentarioList = document.getElementById(`${gatoId}`);
        const nuevoComentario = document.createElement('li');
        nuevoComentario.textContent = comentarioTexto;
        comentarioList.appendChild(nuevoComentario);

        // Limpiar el campo de entrada después de agregar el comentario
        comentarioInput.value = '';
    }
}

