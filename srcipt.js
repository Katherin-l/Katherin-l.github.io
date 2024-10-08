const counters = document.querySelectorAll(".counters span");
const container = document.querySelector(".counters");

let activated = false;

window.addEventListener("scroll", () => {
	if(
        scrollY > container.offsetTop - container.offsetHeight - 200
		&& activated === false
	){
		counters.forEach(counter => {
			counter.innerText =0;
			
			let count = 0;
			
			function updateCount (){
				const target = parseInt(counter.dataset.count);
				if(count < target){
					count++;
					counter.innerText = count;
					setTimeout(updateCount, 30);
				} else {
					
					counter.innerText = target;
				}
			}
			updateCount();
			activated = true;
		});
	} else if (
        scrollY < container.offsetTop - container.offsetHeight - 500
		|| scrollY === 0
		&& activated === true
	) {
		counters.forEach(counter => {
			counter.innerText = 0;
		});
										 
		activated = false;								 
	}
});



//MENU Y PIE DE PAGINA ESTATICO
const header = document.querySelector("header");
const footer = document.querySelector("footer");

 header.innerHTML= `
  <div class="banner">
            
            
            <video autoplay loop muted plays-inline>
                <source src="video/principal.mp4" type="video/mp4">
            </video>
            <div class="navbar">
                <div class="fndo"><img class="logo" src="Imagenes/logo.png"></div>
                <ul>
         
                    <li><a href="index.html" id="br-1">Inicio</a></li>
                    <li><a href="nosotros.html" id="br-2">Nosotros</a></li>
                    <li><a href="producto.html" id="br-3">Productos</a></li>
                    <li><a href="servicios.html" id="br-4">Servicios</a></li>
                    <li><a href="calidad.html" id="br-5">Calidad</a></li>
                    <li><a href="contacto.html" id="br-6">Contacto</a></li>
                   
                </ul>
                <div class="translate">
            <a href="#" id="idioma" class="idioma">
                <img src="" alt="Icono bandera">
                <img src="banderas/bottom.svg" alt="Icono bottom">
            </a>
            <ul id="idiomas" class="idiomas">
                <li class="opcion">
                    <a href="#">
                        <img src="banderas/latino.svg" alt="Icono bandera">
                        <span>LATINO</span>
                    </a>
                </li>
                <li class="opcion">
                    <a href="#">
                        <img src="banderas/usa.svg" alt="Icono bandera">
                        <span>USA</span>
                    </a>
                </li>
            </ul>
        </div>
              
            </div>
            <div class="content-i">
                <h1>CAC BAGUA <span>GRANDE</span></h1>
                <div>
                    <a href="#pag1"><button type="button" id="btn">Explorar</button></a>
                </div>
            </div>
        </div>    
 `;
footer.innerHTML= `
<div class="final">
            <div class="footer-row">
                <div class="footer-links">
                    <h4 id="n1">Nosotros</h4>
                    <ul>
                        <li><a href="nosotros.html" id="sub-n1">Misión y Visión</a></li>
                        <li><a href="nosotros.html" id="sub-n2">Nuestro Historia</a></li>
                        <li><a href="#" id="sub-n3">Nuestro Equipo</a></li>
                        
                    </ul>
                    <h3><span id="subb-n3">Nuestra Ubicacion</span>
                    <br><span id="subb-n4">Dirección</span></h3>
                    <p><span id="subb-n5">Jr. Abrahan Valdelomar Nº 232</span>
                    <span id="subn6">Grande</span><span id="subn7">(Uctubamba Amazonas - Perú)</span></p>
                </div>
                <div class="footer-links">
                    <h4 id="n2">Ayuda</h4>
                    <ul>
                        <li><a href="contacto.html" id="sub-n4">Registro</a></li>
                        <li><a href="contacto.html" id="sub-n5">Contacto</a></li>
                        <li><a href="nosotros.html" id="sub-n6">Nosotros</a></li>
                        
                    </ul>
                     <h3 id="subb-n6">Planta de procesos</h3>
                <p><span id="subb-n7">Jr. Isidro Mamani Nº 120</span><br>
                <span id="subn8">Sector San Luis Bagua Grande</span><br><span id="subn9">(Uctubamba
                Amazonas - Perú)</span></p>
                </div>
                <div class="footer-links">
                    <h4 id=n3>Tienda</h4>
                    <ul>
                        <li><a href="productos.html" id="sub-n7">Productos</a></li>
                        <li><a href="servicios.html" id="sub-n8">Nuestro Servicios</a></li>
                        <li><a href="calidad.html" id="sub-n9">Calidad</a></li>
                        
                    </ul>
                    <h3> Amazonas - Peru</h3>
                    
                </div>
                <div class="footer-links">
                    <h4 id="n4">Siguenos</h4>
                    <div class="social-link">
                        <a href=""><i class="fab fa-facebook-f"></i></a>
                        <a href=""><i class="fab fa-instagram"></i></a>
                        <a href=""><i class="fab fa-tiktok"></i></a>
                        <a href=""><i class="fab fa-linkedin"></i></a>
                    </div>
                    <p> © Copyright 2024, Katherine Lucero Purihuamán</p>
                </div>
            </div>
        </div>
                
`;


const idiomaActual = document.getElementById('idioma');
const listaIdiomas = document.getElementById('idiomas');
const idiomas = document.getElementsByClassName('opcion');


const titulo = document.getElementById('titulo-info');
const parrafo = document.getElementById('parrafo-info');
const certif = document.getElementById('titulo-certi');
const pregunta1 = document.getElementById('titulo-p1');
const txt1 = document.getElementById('text1');
const txt2 = document.getElementById('text2');
const txt3 = document.getElementById('text3');
const txt31 = document.getElementById('text3-1');
const txt32 = document.getElementById('text3-2');
const txt4 = document.getElementById('text4');
const txt41 = document.getElementById('text4-1');
const txt42 = document.getElementById('text4-2');
const titulo2 = document.getElementById('titulo-p2');
const conte1 = document.getElementById('contador-1');
const conte2 = document.getElementById('contador-2');
const conte3 = document.getElementById('contador-3');
const conte4 = document.getElementById('contador-4');
const titulo3 = document.getElementById('titulo-p3');
const txt5 = document.getElementById('t-1');
const txt6 = document.getElementById('t-2');
const txt7 = document.getElementById('t-3');
const txt8 = document.getElementById('t-4');
const txt9 = document.getElementById('t-5');
const txt10 = document.getElementById('t-6');
const txt11 = document.getElementById('t-7');
const txt12 = document.getElementById('t-8');
const txt13 = document.getElementById('sub-1');
const txt14 = document.getElementById('sub-2');
const txt15 = document.getElementById('sub-3');
const txt16 = document.getElementById('sub-4');
const txt17 = document.getElementById('sub-5');
const txt18 = document.getElementById('sub-6');
const txt19 = document.getElementById('sub-7');
const txt20 = document.getElementById('sub-8');
const fott = document.getElementById('n1');
const fott1 = document.getElementById('n2');
const fott2 = document.getElementById('n3');
const fott3 = document.getElementById('n4');
const subfot = document.getElementById('sub-n1');
const subfot1 = document.getElementById('sub-n2');
const subfot2 = document.getElementById('sub-n3');
const subfot3 = document.getElementById('sub-n4');
const subfot4 = document.getElementById('sub-n5');
const subfot5 = document.getElementById('sub-n6');
const subfot6 = document.getElementById('sub-n7');
const subfot7 = document.getElementById('sub-n8');
const subfot8 = document.getElementById('sub-n9');
const localisar11 = document.getElementById('subb-n3');
const localisar21 = document.getElementById('subb-n4');
const localisar31 = document.getElementById('subb-n5');
const localisar41 = document.getElementById('subn6');
const localisar51 = document.getElementById('subn7');
const localisar61 = document.getElementById('subb-n6');
const localisar71 = document.getElementById('subb-n7');
const localisar81 = document.getElementById('subn8');
const localisar91 = document.getElementById('subn9');
const boton1 = document.getElementById('btn');
const barra1 = document.getElementById('br-1');
const barra2 = document.getElementById('br-2');
const barra3 = document.getElementById('br-3');
const barra4 = document.getElementById('br-4');
const barra5 = document.getElementById('br-5');
const barra6 = document.getElementById('br-6');
const estaticc = document.getElementById('t1');
const boton11 = document.getElementById('btn');
const titlee = document.getElementById('title-p2');
const des = document.getElementById('descripcion');
const mis = document.getElementById('subb-n');
const vis = document.getElementById('subb-n2');
const des2 = document.getElementById('descripcion2');
const des3 = document.getElementById('descripcion3');
const titlee2 = document.getElementById('title-p3');
const des4 = document.getElementById('descripcion4');
const local1 = document.getElementById('subb-n3');
const local2 = document.getElementById('subb-n4');
const local3 = document.getElementById('subb-n5');
const local4 = document.getElementById('subn6');
const local5 = document.getElementById('subn7');
const local6 = document.getElementById('subb-n6');
const local7 = document.getElementById('subb-n7');
const local8 = document.getElementById('subn8');
const local9 = document.getElementById('subn9');
const localisar1 = document.getElementById('subb-n3');
const localisar2 = document.getElementById('subb-n4');
const localisar3 = document.getElementById('subb-n5');
const localisar4 = document.getElementById('subn6');
const localisar5 = document.getElementById('subn7');
const localisar6 = document.getElementById('subb-n6');
const localisar7 = document.getElementById('subb-n7');
const localisar8 = document.getElementById('subn8');
const localisar9 = document.getElementById('subn9');
const estaticc2 = document.getElementById('t2');
const titlee3 = document.getElementById('titulo-pr');
const subtitle4 = document.getElementById('sub-pr2');
const deslisar = document.getElementById('boton-des');
const protitulo = document.getElementById('title-pro');
const protitulo1 = document.getElementById('title-pro2');
const protitulo2 = document.getElementById('title-pro3');
const protitulo3 = document.getElementById('title-pro4');
const protitulo4 = document.getElementById('title-pro5');
const des5 = document.getElementById('descripcion5');
const des6 = document.getElementById('descripcion6');
const des7 = document.getElementById('descripcion7');
const des8 = document.getElementById('descripcion8');
const des14 = document.getElementById('descripcion14');
const estaticc3 = document.getElementById('t3');
const sertitulo = document.getElementById('titulo-ser');
const sersubtitulo = document.getElementById('subser');
const des9 = document.getElementById('descripcion9');
const sersubtitulo2 = document.getElementById('subser-2');
const sersubtitulo3 = document.getElementById('subser-3');
const sersubtitulo4 = document.getElementById('subser-4');
const sersubtitulo5 = document.getElementById('subser-5');
const serpersona = document.getElementById('persona1');
const serpersona2 = document.getElementById('persona2');
const sertitulo2 = document.getElementById('titulo-ser2');
const sersubtitulo6 = document.getElementById('subser-6');
const des10 = document.getElementById('descripcion10');
const sertitulo3 = document.getElementById('titulo-ser3');
const sersubtitulo7 = document.getElementById('subser-7');
const sersubtitulo8 = document.getElementById('subser-8');
const des11 = document.getElementById('descripcion11');
const sertitulo4 = document.getElementById('titulo-ser4');
const sersubtitulo9 = document.getElementById('subser-9');
const sersubtitulo10 = document.getElementById('subser-10');
const des12 = document.getElementById('descripcion12');
const estaticc4 = document.getElementById('t4');
const caltitulo = document.getElementById('titulo-calid');
const des13 = document.getElementById('descripcion13');
const caltitulo2 = document.getElementById('titulo-calid2');
const caltitulo3 = document.getElementById('titulo-calid3');
const estaticc5 = document.getElementById('t5');
const contatitulo = document.getElementById('reg');
const contaboton = document.getElementById('boton-cont');





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
    idiomaActual.getElementsByTagName('img')[0].src = `banderas/${idioma}.svg`;
    switch (idioma) {
        case 'usa':
            certif.textContent = 'Certifications';
            pregunta1.textContent = 'What do we offer?';
            txt1.textContent = 'Direct export';
            txt2.textContent = 'Trading Services';
            txt3.textContent = 'Piling Service';
            txt31.textContent = 'Green Coffee';
            txt32.textContent = 'in grain';
            txt4.textContent = 'National sale and';
            txt41.textContent = 'coffee export';
            txt42.textContent = 'Roasted and Ground';
            titulo2.textContent = 'Our Main Markets';
            conte1.textContent = 'Partners';
            conte2.textContent = 'Annual Containers';
            conte3.textContent = 'Customers';
            conte4.textContent = 'Supported Families';
            titulo3.textContent = 'Our Technical Sheet';
            txt5.textContent = 'Organization Data';
            txt6.textContent = 'Origin of Coffee';
            txt7.textContent = 'Own production';
            txt8.textContent = 'Available Varieties';
            txt9.textContent = 'Quality in cup';
            txt10.textContent = 'Organoleptic Profile';
            txt11.textContent = 'Production Process';
            txt12.textContent = 'Certifications';
            txt13.textContent = 'CAC BAGUA GRANDE LTDA RUC: 20170142773 Amazonas Region - Peru';
            txt14.textContent = 'Peru - Amazon Region';
            txt15.textContent = 'Our production is 16,500 quintals, 75% Organic + Fair Trade Coffee and 25% Fair Trade Coffee.';
            txt16.textContent = 'Caturra, Bourbon, Catimor, Typical, Catuaí';
            txt17.textContent = '82-84 Points';
            txt18.textContent = 'Notes of Caramel, Molasses, Chocolate, Vanilla with a soft, sweet, short aftertaste, with orange acidity and a medium tense body.';
            txt19.textContent = 'Washing';
            txt20.textContent = 'Fair Trade, Organic, C.A.F.E. Practice.';
            fott.textContent = 'Us';
            fott1.textContent = 'Aid';
            fott2.textContent = 'Store';
            fott3.textContent = 'follow us';
            subfot.textContent = 'Mission and Vision';
            subfot1.textContent = 'Our History';
            subfot2.textContent = 'Our Team';
            subfot3.textContent = 'Record';
            subfot4.textContent = 'Contact';
            subfot5.textContent = 'Us';
            subfot6.textContent = 'Products';
            subfot7.textContent = 'Our Services';
            subfot8.textContent = 'Quality';
            localisar11.textContent = 'Our Location';
            localisar21.textContent = 'Direction';
            localisar31.textContent = 'Jr.Abrahan Valdelomar Nº 232';
            localisar41.textContent = 'Grande';
            localisar51.textContent = '(Uctubamba Amazonas - Perú)';
            localisar61.textContent = 'Process Plant';
            localisar71.textContent = 'Jr. Isidro Mamani Nº 120';
            localisar81.textContent = 'Sector San Luis Bagua Grande',
            localisar91.textContent = 'Uctubamba Amazonas - Perú)';
            boton1.textContent = 'Explore';
            barra1.textContent = 'Home';
            barra2.textContent = 'Know us';
            barra3.textContent = 'Products';
            barra4.textContent = 'Services';
            barra5.textContent = 'Quality';
            barra6.textContent = 'Contact us'
            
            
           
            break;

        case 'latino':
            certif.textContent= 'Certificaciones';
            pregunta1.textContent= '¿Que Ofrecemos?';
            txt1.textContent = 'Exportación directa';
            txt2.textContent = 'Servicio de Trading';
            txt3.textContent = 'Servicio de Pilado';
            txt31.textContent = 'de Café Verde';
            txt32.textContent = 'en Grano';
            txt4.textContent = 'Venta nacional y de';
            txt41.textContent = 'exportación de Café';
            txt42.textContent = 'Tostado y Molido';
            titulo2.textContent = 'Nuestros Principales Mercados';
            conte1.textContent = 'Socios';
            conte2.textContent = 'Contenedores Anual';
            conte3.textContent = 'Clientes';
            conte4.textContent = 'Familias Apoyadas';
            titulo3.textContent = 'Nuestra Ficha Tecnica';
            txt5.textContent = 'Datos de la Organización';
            txt6.textContent = 'Procedencia del Café';
            txt7.textContent = 'Producción Propia';
            txt8.textContent = 'Variedades Disponibles';
            txt9.textContent = 'Calidad en taza';
            txt10.textContent = 'Perfil Organoléptico';
            txt11.textContent = 'Proceso de Producción';
            txt12.textContent = 'Certificaciones';
            txt13.textContent = 'CAC BAGUA GRANDE LTDA RUC: 20170142773 Región Amazonas - Perú';
            txt14.textContent = 'Perú - Región Amazonas';
            txt15.textContent = 'Nuestra producción es de 16500 quintales, siendo el 75% Orgánico + Café Comercio Justo y 25% Café Comercio Justo.';
            txt16.textContent = 'Caturra, Bourbon, Catimor, Típica, Catuaí';
            txt17.textContent = '82-84 Puntos';
            txt18.textContent = 'Notas a Caramelo, Melaza, Chocolate, Vainilla con un post gusto suave, dulce, corto, con acidez a naranja y un cuerpo medio tenso.';
            txt19.textContent = 'Lavado';
            txt20.textContent = 'Comercio Justo, Orgánico, C.A.F.E. Practice.';
            fott.textContent = 'Nosotros';
            fott1.textContent = 'Ayuda';
            fott2.textContent = 'Tienda';
            fott3.textContent = 'Siguenos';
            subfot.textContent = 'Misión y Visión';
            subfot1.textContent = 'Nuestro Historia';
            subfot2.textContent = 'Nuestro Equipo';
            subfot3.textContent = 'Registro';
            subfot4.textContent = 'Contacto';
            subfot5.textContent = 'Nosotros';
            subfot6.textContent = 'Productos';
            subfot7.textContent = 'Nuestro Servicios';
            subfot8.textContent = 'Calidad';
            localisar11.textContent = 'Nuestra Ubicacion';
            localisar21.textContent = 'Dirección';
            localisar31.textContent = 'Jr.Abrahan Valdelomar Nº 232';
            localisar41.textContent = 'Grande';
            localisar51.textContent = '(Uctubamba Amazonas - Perú)';
            localisar61.textContent = 'Planta de procesos';
            localisar71.textContent = 'Jr. Isidro Mamani Nº 120';
            localisar81.textContent = 'Sector San Luis Bagua Grande',
            localisar91.textContent = 'Uctubamba Amazonas - Perú)';
            boton1.textContent = 'Explorar';
            barra1.textContent = 'Inicio';
            barra2.textContent = 'Nosotros';
            barra3.textContent = 'Productos';
            barra4.textContent = 'Servicios';
            barra5.textContent = 'Calidad';
            barra6.textContent = 'Contacto'
            
           
                
            break;
        default:
            break;
    }
}

            
document.addEventListener('DOMContentLoaded',()=>{
    switch (navigator.language) {
        case 'es-US':
            case 'es':
            establecerIdioma('latino')
            break;
        
        default:
            break;
    }      
});






 let next = document.querySelector('.next')
 let prev = document.querySelector('.prev')
 
 next.addEventListener('click', function(){
     let items = document.querySelectorAll('.item')
     document.querySelector('.slide').appendChild(items[0])
 });
 
 prev.addEventListener('click', function(){
     let items = document.querySelectorAll('.item')
     document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
 });




 //IDIOMA
