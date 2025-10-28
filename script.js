
//Dialog ------------------------------

let botonAbrir = document.getElementById("abrirDialogo");
let botonCerrar = document.getElementById("cerrarDialogo");

let dialogo = document.querySelector("dialog");


botonAbrir.onclick = function(evento) {
   
    evento.preventDefault(); 
    dialogo.dataset.open = "true";
    dialogo.showModal(); 
}

botonCerrar.onclick = function() {
    dialogo.close();
}

dialogo.addEventListener("click", function(evento) {
    if (evento.target === dialogo) {
        dialogo.close();
    }
});

//Animacion texto -------------------------

// script.js
document.addEventListener("DOMContentLoaded", function () {
  const textos = ["Hello!", "Kaixo!", "Hola!"];
  const elemento = document.getElementById("textoAnimacion");

  let textoIndex = 0;
  let charIndex = 0;
  let borrando = false;

  function tipeo() {
    const textoActual = textos[textoIndex];

    if (!borrando) {
      // escribiendo: aumentamos charIndex y mostramos
      charIndex++;
      elemento.textContent = textoActual.slice(0, charIndex);

      // si ya escribimos todo, esperamos y cambiamos a borrado
      if (charIndex === textoActual.length) {
        borrando = true;
        setTimeout(tipeo, 1500); // pausa antes de borrar
        return;
      }
    } else {
      // borrando: disminuimos charIndex y mostramos
      charIndex--;
      elemento.textContent = textoActual.slice(0, charIndex);

      // si ya borramos todo, pasamos a la siguiente palabra
      if (charIndex === 0) {
        borrando = false;
        textoIndex = (textoIndex + 1) % textos.length;
      }
    }

    const velocidad = borrando ? 80 : 300; // más rápido al borrar
    setTimeout(tipeo, velocidad);
  }

  // arrancamos
  tipeo();
});

//Botones -------------------

function abrirEnNuevaVentana() {
  const elementos = document.querySelectorAll("a, button");

  elementos.forEach((el) => {
    // Ignorar botones/enlaces con id abrirDialogo o cerrarDialogo
    if (el.id === "abrirDialogo" || el.id === "cerrarDialogo") return;

    // Enlaces <a>
    if (el.tagName === "A" && el.href) {
      el.addEventListener("click", function (event) {
        event.preventDefault();
        window.open(this.href, "_blank", "noopener,noreferrer");
      });
    }

    // Botones <button> con acción (opcional)
    if (el.tagName === "BUTTON" && el.onclick) {
      const originalClick = el.onclick;
      el.onclick = function (event) {
        event.preventDefault();
        const nuevaVentana = window.open("", "_blank", "noopener,noreferrer");
        nuevaVentana.document.write("<h1>Botón ejecutado en nueva ventana</h1>");
        originalClick.call(this, event);
      };
    }
  });
}

// Ejecutar al cargar la página
abrirEnNuevaVentana();