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
            <input type="checkbox" id="check">
            
            <video autoplay loop muted plays-inline>
                <source src="video/principal.mp4" type="video/mp4">
            </video>
            <div class="navbar">
                <img class="logo" src="Imagenes/logo.png">
                <ul>
                    <li><a href="index.html" class=" active">Inicio</a></li>
                    <li><a href="nosotros.html">Nosotros</a></li>
                    <li><a href="producto.html">Productos</a></li>
                    <li><a href="servicios.html">Servicios</a></li>
                    <li><a href="calidad.html">Calidad</a></li>
                    <li><a href="contacto.html">Contacto</a></li>
                    
                </ul>
            </div>
            <div class="content-i">
                <h1>CAC BAGUA <span>GRANDE</span></h1>
                <div>
                    <a href="#cert"><button type="button">Explorar</button></a>
                </div>
            </div>
        </div>    
 `;
footer.innerHTML= `
<div class="final">
            <div class="footer-row">
                <div class="footer-links">
                    <h4>Nosotros</h4>
                    <ul>
                        <li><a href="nosotros.html">Misión y Visión</a></li>
                        <li><a href="#">Nuestro Historia</a></li>
                        <li><a href="#">Nuestro Equipo</a></li>
                        
                    </ul>
                </div>
                <div class="footer-links">
                    <h4>Ayuda</h4>
                    <ul>
                        <li><a href="#">Registro</a></li>
                        <li><a href="#">Contacto</a></li>
                        <li><a href="#">Nosotros</a></li>
                        
                    </ul>
                </div>
                <div class="footer-links">
                    <h4>Tienda</h4>
                    <ul>
                        <li><a href="#">Productos</a></li>
                        <li><a href="#">Nuestro Servicios</a></li>
                        <li><a href="#">Calidad</a></li>
                        
                    </ul>
                </div>
                <div class="footer-links">
                    <h4>Siguenos</h4>
                    <div class="social-link">
                        <a href=""><i class="fab fa-facebook-f"></i></a>
                        <a href=""><i class="fab fa-instagram"></i></a>
                        <a href=""><i class="fab fa-tiktok"></i></a>
                        <a href=""><i class="fab fa-linkedin"></i></a>
                    </div>
                </div>
            </div>
        </div>
`;




  function imgSlider(anything){
    document.querySelector('.starbucks').src = anything;
 }
 function changeCircleColor(color){
    const circle = document.querySelector('.circle');
    circle.style.background = color;
 }

 let next = document.querySelector('.next')
 let prev = document.querySelector('.prev')
 
 next.addEventListener('click', function(){
     let items = document.querySelectorAll('.item')
     document.querySelector('.slide').appendChild(items[0])
 })
 
 prev.addEventListener('click', function(){
     let items = document.querySelectorAll('.item')
     document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
 })


 //BARRA
 const spans = document.querySelectorAll('.progress-bar span');

 spans.forEach((span) => {
    span.style.width = span.dataset.width;
    span.innerHTML = span.dataset.width;
 });


 