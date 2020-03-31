/* Galeria */
var imagenesDisponibles = ['iterweb', 'adonline', 'ciclon', 'mas', 'quay'];
var imagenActual = 0;
var imgEnGaleria = document.querySelector("#galeria > img");

imgEnGaleria.addEventListener("click", cambiarImagenEnGaleria);

function cambiarImagenEnGaleria() {
  imagenActual++;
  if (imagenActual === imagenesDisponibles.length) {
    imagenActual = 0;
  }
  this.src = 'images/gallery/' + imagenesDisponibles[imagenActual] + '.jpg';
}
/* Finaliza Galería */

/* Servicios */
class Servicio {
  constructor(imagen, titulo, texto) {
    this._imagen = imagen;
    this._titulo = titulo;
    this._texto  = texto;
  }
  get imagen() { return this._imagen + '.png'; }
  get titulo() { return this._titulo; }
  get texto()  { return this._texto; }
}
var servicios = [];
var html = '';
var elementoServicios = document.getElementById('servicios');

servicios.push(new Servicio('shout', 'Publicidad', 'Gestión y producción integral multicanal de pedidos y originales publicitarios'));
servicios.push(new Servicio('devices', 'Editorial', 'Sala de prensa multimedia y multicanal a plena capacidad'));
servicios.push(new Servicio('target', 'Audiencia', 'Circulación, suscripciones, análisis de comportamiento Big Data: segmentación y envío de notificaciones'));
for (let i = 0; i < servicios.length; i++) {
  html += '<article>'
  html += '<img src="images/servicios/' + servicios[i].imagen + '" width="50" height="50">';
  html += '<h3>' + servicios[i].titulo + '</h3>';
  html += '<p>' + servicios[i].texto + '</p>';
  html += '</article> '
}
elementoServicios.innerHTML = html;
/* Finaliza Servicios */

/* Experiencia */
var elementoExperiencias = document.querySelectorAll("#experiencias-text > div > div");
elementoExperiencias.forEach(element => {
  element.addEventListener("click", extenderTextoEnExperiencias);
});

function extenderTextoEnExperiencias() {
  this.parentElement.firstChild.innerHTML += '<br><br>Anécdota interesante acerca de la experiencia de la empresa...';
}
/* Finaliza Experiencia */

/* Testimonios */
var obtenerTestimonios = new Promise((exito, fracaso) => {
  let testimonio = {
    texto: 'Aquí va un testimonio de un cliente satisfecho. Un resumen de lo que adquirió y lo bien que le va con ello.',
    imagen:'images/testimonios/client.png',
    nombre: 'Nombre Apellido',
    cargo: 'Cargo que ocupa'
  };
  setTimeout(() => {
    // fracaso('Algo ha pasado');
    exito([testimonio, testimonio, testimonio]);
  }, 4000);
});
obtenerTestimonios
.then((data) => {
  crearTestimonios(data);
})
.catch((error) => {
  console.log(error);
});

function crearTestimonios(testimonios) {
  var html = '';
  testimonios.forEach(testimonio => {
    html += '<article>';
    html += '<p>' + testimonio.texto + '</p>';
    html += '<div class="testimonio">'
    html += '<img src="' + testimonio.imagen + '" alt="Cliente feliz">'
    html += '<div>'
    html += '<h3>' + testimonio.nombre + '</h3>'
    html += '<span>' + testimonio.cargo + '</span>'
    html += '</div>'
    html += '</div>'
    html += '</article> '
  });
  document.getElementById('testimonios-cargando').remove();
  document.getElementById('testimonios').innerHTML += html;
}
/* Finaliza Testimonios */