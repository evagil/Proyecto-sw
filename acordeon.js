let slideIndex = 1;

showSlides = (cantidad) => {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (cantidad > slides.length) {slideIndex = 1}
    if (cantidad < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }

showSlides(slideIndex);

// Siguiente y anterior imagen
plusSlides = (cantidad) => {
  showSlides(slideIndex += cantidad);
}

// Actualizar el indice de la imagen
currentSlide = (cantidad) => {
  showSlides(slideIndex = cantidad);
}

// Recorre las imagenes cada 3 segundos
setInterval(() => {
    plusSlides(1)
}, 3000);