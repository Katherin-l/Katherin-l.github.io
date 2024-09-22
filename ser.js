function establecerIdioma(idioma) {
    idiomaActual.getElementsByTagName('img')[0].src= `imagenes/banderas/${idioma}.svg`;
    switch (idioma) {
        case 'usa':
            estaticc3.textContent = 'Quality'
            
        break;

        case 'latino':
            estaticc3.textContent = 'Servicios'
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
    