let slideIndex = 1;
showSlides(slideIndex);

function nextSlide() {
    showSlides(slideIndex += 1);
}

function previousSlide() {
    showSlides(slideIndex -= 1);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("item");
    let dots = document.getElementsByClassName("slider__dots__item");

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }

    for (let slide of slides) {
        slide.style.display = "none";
    }

    let i;

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active__1", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active__1";
}