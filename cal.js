function establecerIdioma(idioma) {
    idiomaActual.getElementsByTagName('img')[0].src= `banderas/${idioma}.svg`;
    switch (idioma) {
        case 'usa':
            estaticc4.textContent = 'Quality';
            caltitulo.textContent = 'Our certifications';
            des13.textContent = 'We have ORGANIC and FAIR TRADE certification (IMOCERT AND FAIRTRADE). NOP seal for commercialization United States and Canada, EU Seal for marketing to the European Union and the PE seal for Organic production. The members of the Cooperativa Agraria Cafetalera Bagua Grande Ltda grow coffee from the different varieties such as: caturra, catimor, catuai, pache, tipica and others. Their plots being located between 1300 to 2200 meters above sea level; low standards and criteria for organic and sustainable production. In some of the sectors the transfer is carried out in animals, vehicles; always taking care of traceability so that the product reaches its destination in optimal conditions. Currently there are 872 hectares of coffee in production and 22 hectares of coffee in growth.';
            caltitulo2.textContent = 'PRODUCTION CERTIFICATES';
            caltitulo3.textContent = 'PLANT CERTIFICATES';
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
                estaticc4.textContent = 'Calidad';
                caltitulo.textContent = 'Nuestras certificaciones';
                des13.textContent = 'Contamos con certificación ORGANICA y COMERCIO JUSTO (IMOCERT Y FAIRTRADE). Sello NOP para la comercialización a Estados Unidos y Canadá, Sello UE para la comercialización a la Unión Europea y el sello PE de producción Ecológica.Los socios de la Cooperativa Agraria Cafetalera Bagua Grande Ltda cultivan café de las diferentes variedades tales como: caturra, catimor, catuai, pache, típica y otras. Estando sus parcelas ubicadas entre los 1300 a 2200 m.s.n.m.; bajo estándares y criterios de producción orgánica y sustentable. En algunos de los sectores el traslado se realiza en animales, vehículos; cuidando siempre la trazabilidad para que el producto llegue a su destino en óptimas condiciones. Actualmente se cuenta con 872 hectáreas de café en producción y 22 hectáreas de café en crecimiento.';
                caltitulo2.textContent = 'CERTIFICADOS DE PRODUCCION';
                caltitulo3.textContent = 'CERTIFICADOS DE PLANTA';
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
