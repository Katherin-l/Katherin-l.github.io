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
<section class="todo">
            <nav>
                        <input type="checkbox" id="check">
                        <label for="check">
                            <i class="fas fa-bars" id="btn"></i>
                            <i class="fas fa-times" id="cancel"></i>
                        </label>
                            <img src="Imagenes/logo.png">
                        <ul>
                            <li>
                                <a href="index.html" class=" active">Inicio</a>
                            </li>
                            <li>
                                <a href="nosotros.html" class="btns">Nosotros</a>
                            </li>
                            <li>
                                <a href="producto.html" class="btns">Productos</a>
                            </li>
                            <li>
                                <a href="servicios.html">Servicios</a>
                            </li>
                            <li>
                                <a href="calidad.html">Calidad</a>
                            </li>
                            <li>
                                <a href="contacto.html">Contacto</a>
                            </li>
                        </ul>
                    </nav>
                      <section class="inicio" id="inicio">
                <div class="content">
                    <h2>Its not just coffe<br>Its<span>CAC BAGUA GRANDE</span></h2>
                  
                     <div class="boton">
                        <a href="nosotros.html">Nosotros</a>
                        <a href="contacto.html">Mas información</a>
                    </div>
                </div>
            </section>
            </section>
      
`;
footer.innerHTML= `
<div class="final">
            <div class="footer-row">
                <div class="footer-links">
                    <h4>Nosotros</h4>
                    <ul>
                        <li><a href="#">Misión y Visión</a></li>
                        <li><a href="#">Nuestro Historia</a></li>
                        <li><a href="#">Nuestro Equipo</a></li>
                        
                    </ul>
                </div>
                <div class="footer-links">
                    <h4>Ayuda</h4>
                    <ul>
                        <li><a href="#">Nosotros</a></li>
                        <li><a href="#">Nuestro Servicios</a></li>
                        <li><a href="#">Nosotros</a></li>
                        <li><a href="#">Nosotros</a></li>
                    </ul>
                </div>
                <div class="footer-links">
                    <h4>Tienda</h4>
                    <ul>
                        <li><a href="#">Nosotros</a></li>
                        <li><a href="#">Nuestro Servicios</a></li>
                        <li><a href="#">Nosotros</a></li>
                        <li><a href="#">Nosotros</a></li>
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

