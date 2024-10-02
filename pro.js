function establecerIdioma(idioma) {
    idiomaActual.getElementsByTagName('img')[0].src= `imagenes/banderas/${idioma}.svg`;
    switch (idioma) {
        case 'usa':
            estaticc2.textContent = 'Products';
            titlee3.textContent = 'Our various varieties';
            subtitle4.textContent = ' of COFFEE';
            deslisar.textContent = 'See more';
            protitulo.textContent = 'CATURRA';
            protitulo1.textContent = 'BOURBON ';
            protitulo2.textContent = 'CATIMOR';
            protitulo3.textContent = 'TYPICAL COFFEE';
            protitulo4.textContent = 'CATUAI';
            des5.textContent = 'Caturra coffee is a variety with small round beans with a ruffled shape and a smooth, slightly shiny light green surface; This variety is characterized by its complexity, an intense sweet flavor balanced with bright acidity and medium body.';
            des6.textContent = 'Bourbon coffee has physical characteristics such as being a medium oval bean with an ellipsoidal shape and a slightly rough surface, a light green or yellowish color; This variety is characterized by its intense and sweet aroma, a balanced and creamy flavor, soft acidity and a rich body.';
            des7.textContent = 'Catimor coffee has a medium ellipsoidal grain and a slightly rough surface; Its organoleptic characteristics in aroma are soft sweet balanced with medium acidity and a medium body.';
            des8.textContent = 'The typical coffee is physically characterized by its ellipsoidal fruits and slightly rough surfaces of a light green color; Its aroma is intense floral complex, sweet flavors that are prolonged and balanced with a soft feel and a creamy body.';
            des14.textContent = 'The catuai variety is a mixture of the caturra and mundo novo varieties and is characterized by its medium-sized ellipsoidal fruit and light green color; Its aroma presents intensity and fruitiness, a balanced sweet flavor, medium acidity, and a smooth body.';
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
            boton1.textContent = 'Explore';
            barra1.textContent = 'Home';
            barra2.textContent = 'Know us';
            barra3.textContent = 'Products';
            barra4.textContent = 'Services';
            barra5.textContent = 'Quality';
            barra6.textContent = 'Contact us'

            break;

        case 'latino':
            estaticc2.textContent = 'Productos';
            titlee3.textContent = 'Nuestras diversas variedades';
            subtitle4.textContent ='de CAFE';
            deslisar.textContent = 'Ver más';
            protitulo.textContent = 'CATURRA';
            protitulo1.textContent = 'BOURBON ';
            protitulo2.textContent = 'CATIMOR';
            protitulo3.textContent = 'CAFE TIPICO';
            protitulo4.textContent = 'CATUAÍ';
            des5.textContent = 'El café caturra es una variedad con granos pequeños redondos con forma volada y superficie lisa un verde claro ligeramente brillante; esta variedad se caracteriza por su complejidad un sabor dulce intenso balanceado con una acidez brillante y cuerpo medio.';
            des6.textContent = 'El café Bourbon, tiene características físicas como ser un grano mediano ovalado con forma elipsoidal y superficie ligeramente rugosa un color verde claro o amarillenta; esta variedad se caracteriza por su aroma intenso y dulce un sabor equilibrado y cremoso acidez suave y un cuerpo rico.';
            des7.textContent = 'El café catimor tiene un grano mediano conforma el elipsoidal y superficie ligeramente rugosa; sus características organoléptica en aroma es suave dulce equilibrado con una acidez media y un cuerpo mediano. ';
            des8.textContent = 'El café típico físicamente se caracteriza por sus frutos elipsoidales y superficies ligeramente rugosa un color verde claro; su aroma es intenso complejo floral sabores dulce prolongados y equilibrados con una sede suave un cuerpo cremaso'
            des14.textContent = 'La variedad  catuai es una mezcla de las variedades caturra y mundo novo y se caracteriza por su fruto mediano grano elipsoidales y color verde claro; en su aroma presenta intensidad y frutal un sabor dulce equilibrado una acidez media un cuerpo terso';
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
            case 'es':
                establecerIdioma('latino')
                break;
            
            default:
                break;
        }      
    });
    