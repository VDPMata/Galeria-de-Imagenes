/*Variables*/
const btnCierra = document.querySelector("#btnCierra")
const btnAdelanta = document.querySelector("#btnAdelanta")
const btnRetrocede = document.querySelector("#btnRetrocede")
const imagenes = document.querySelectorAll("#galeria img")
const lightbox = document.querySelector("#contenedorPrincipal")
const imagenActiva = document.querySelector("#imgActiva")
let iImagen = 0;

/*Abre el Lightbox*/

const abreLightbox = (e)=>{
    imagenActiva.src = e.target.src
    lightbox.style.display = "flex"
    iImagen = Array.from(imagenes).indexOf(e.target)
}

imagenes.forEach((imagen)=>{
    imagen.addEventListener("click", abreLightbox);
})

/*Cierre el Lightbox*/

btnCierra.addEventListener("click",()=>{
    lightbox.style.display = "none"

})

/*Adelanta imagen*/
const adelantaImagen =()=>{
    if(iImagen === imagenes.length -1){
        iImagen = -1
    }
   
    imagenActiva.src = imagenes[iImagen +1].src;
    iImagen++
}

btnAdelanta.addEventListener("click",adelantaImagen)
/*Retrocede imagen*/

const retrocedeImagen =()=>{
    if(iImagen === 0){
        iImagen = imagenes.length
    }
   
    imagenActiva.src = imagenes[iImagen -1].src;
    iImagen--
}

btnRetrocede.addEventListener("click",retrocedeImagen)