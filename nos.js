const idiomaActual = document.getElementById('idioma');
const listaIdiomas = document.getElementById('idiomas');
const idiomas = document.getElementsByClassName('opcion');

const titulos = document.getElementById('titulo-info1');
const parrafos = document.getElementById('parrafo-info1');
const estatic = document.getElementById('t1');
const boton11 = document.getElementById('btn');
const pregunta2 = document.getElementById('title-p2');

idiomaActual.addEventListener('click',()=>{
    listaIdiomas.classList.toggle('toggle');
 });
 
 const opcionesArray = Array.from(idiomas);
 
 opcionesArray.forEach((opcion)=>{
     opcion.addEventListener('click',()=>{
         const idioma = opcion.getElementsByTagName('span')[0].textContent.toLowerCase();
         establecerIdioma(idioma);
     });
       
 })
 
 function establecerIdioma(idioma) {
     idiomaActual.getElementsByTagName('img')[0].src= `imagenes/banderas/${idioma}.svg`;
     switch (idioma) {
         case 'usa':
            titulos.textContent = 'CapiDeveloper';
            parrafos.textContent = 'I am passionate about the world of technology and I love sharing my knowledge with others. To achieve this, I have a YouTube channel where I upload videos every weekend.'
            estatic.textContent = 'Us';
            boton11.textContent = 'Explor';
            pregunta2.textContent = 'Who we are'
            break;

        case 'latino':
            titulos.textContent = 'CapiDeveloper';
            parrafos.textContent = 'Información. Soy apasionado por el mundo de la tecnología y me encanta compartir mis conocimientos con los demás. Para lograr esto, tengo un canal de YouTube donde subo videos cada fin de semana.'
            estatic.textContent = 'Nosotros';
            boton11.textContent = 'Explorar';
            pregunta2.textContent = '¿Quienes somos?'     
            break;
        default:
            break;
    }
}
document.addEventListener('DOMContentLoaded',()=>{
    switch (navigator.language) {
        case 'es':
            establecerIdioma('latino')
            break;
        
        default:
            break;
    }      
});
