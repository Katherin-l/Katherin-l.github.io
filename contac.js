function establecerIdioma(idioma) {
    idiomaActual.getElementsByTagName('img')[0].src= `banderas/${idioma}.svg`;
    switch (idioma) {
        case 'usa':
            estaticc5.textContent = 'Contact us';
            contatitulo.textContent = 'Record';
            contaboton.textContent = 'Send';
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
            localisar6.textContent = 'Process Plant';
            localisar7.textContent = 'Jr. Isidro Mamani Nº 120';
            localisar8.textContent = 'Sector San Luis Bagua Grande',
            localisar9.textContent = 'Uctubamba Amazonas - Perú)';
            boton1.textContent = 'Explore';
            barra1.textContent = 'Home';
            barra2.textContent = 'Know us';
            barra3.textContent = 'Products';
            barra4.textContent = 'Services';
            barra5.textContent = 'Quality';
            barra6.textContent = 'Contact us'
            
        break;

        case 'latino':
            estaticc5.textContent = 'Contacto';
            contatitulo.textContent = 'Registro';
            contaboton.textContent = 'Enviar';
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
        case 'es':
            establecerIdioma('latino')
            break;
        
        default:
            break;
    }      
});
