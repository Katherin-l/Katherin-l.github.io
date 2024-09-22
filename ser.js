function establecerIdioma(idioma) {
    idiomaActual.getElementsByTagName('img')[0].src= `imagenes/banderas/${idioma}.svg`;
    switch (idioma) {
        case 'usa':
            estaticc3.textContent = 'Services';
            sertitulo.textContent = 'Direct export of';
            sersubtitulo.textContent = 'GREEN COFFEE';
            des9.textContent = 'The cooperative guarantees the direct export of 100% of its members';
            sersubtitulo2.textContent = 'Information';
            sersubtitulo3.textContent = 'Information';
            sersubtitulo4.textContent = 'Information';
            sersubtitulo5.textContent = 'Information';
            serpersona.textContent = 'Luz Perez Delgado - Commercial Head';
            serpersona2.textContent = 'Luz Perez Delgado - Commercial Head';
            sertitulo2.textContent = 'Service';
            sersubtitulo6.textContent = 'TRADING';
            des10.textContent = 'We have certifications for the direct export of green coffee as associations, cooperatives and private enterprises that are in the process of opening international markets, charging the lowest commissions in the market.';
            sertitulo3.textContent = 'Service';
            sersubtitulo7.textContent = 'COFFEE PILLING';
            sersubtitulo8.textContent = 'Green Grain';
            des11.textContent = 'We have a modern plant that guarantees physical and organoleptic quality control of the coffee, as well as a production capacity of 60 quintals of export coffee/hour.'
            sertitulo4.textContent = 'National sale and';
            sersubtitulo9.textContent = 'COFFEE EXPORT';
            sersubtitulo10.textContent = 'Toasted';
            des12.textContent = 'We have roasted and ground coffee with santiary authorization issued by digesa and organic certification issued by imocert. guaranteeing the highest quality at competitive prices for the national and international market.'
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
            estaticc3.textContent = 'Servicios';
            sertitulo.textContent = 'Exportación directa de';
            sersubtitulo.textContent = 'CAFÉ VERDE';
            des9.textContent = 'La cooperativa garantiza la exportación directa del 100% de la producción de sus asociados.';
            sersubtitulo2.textContent = 'Información';
            sersubtitulo3.textContent = 'Información';
            sersubtitulo4.textContent = 'Información';
            sersubtitulo5.textContent = 'Información';
            serpersona.textContent = 'Luz Perez Delgado - Jefe Comercial';
            serpersona.textContent = 'Luz Perez Delgado - Jefe Comercial';
            sertitulo2.textContent = 'Servicio de';
            sersubtitulo6.textContent = 'TRADING';
            des10.textContent = 'Contamos con certificaciones para la exportación directa de café verde en grado de asociaciones, cooperativas y emprendimientos privados que se encuentran en el proceso de aperturar mercados internacionales, cobrando las comisiones mas bajas del mercado.';
            sertitulo3.textContent = 'Servicio de';
            sersubtitulo7.textContent = ' PILADO DE CAFÉ';
            sersubtitulo8.textContent = 'Verde en Grano';
            des11.textContent = 'Contamos con una moderna planta que garantiza un control de calidad físico y organoléptico del café, asimismo una capacidad de produccíon de 60 quintales de café de exportación/hora.'
            sertitulo4.textContent = 'Venta nacional y de';
            sersubtitulo9.textContent = 'EXPORTACIÓN DE CAFÉ';
            sersubtitulo10.textContent = 'Tostado';
            des12.textContent = 'Contamos con café tostado y molido con autorización santiaria emitida por digesa y certificación organica emitida por imocert. garantizando la maxima calidad a precios competitivos para el mercado nacional e internacional.'
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
    