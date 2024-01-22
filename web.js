//================================================NavBAR JS==========================================================
//================================================Sparkle JS==========================================================
document.addEventListener('DOMContentLoaded', function () {
    const sparkleContainer = document.querySelector('.sparkle');
    const staticSparkleContainer = document.querySelector('.static-sparkle')

    function createRandomNumber(min, max) {
        return Math.random() * (max - min) + min;
    }

    function createSparkle(container) {
        const spark = document.createElement('img');
        spark.src = '/images/Glow.png';

        // Set random size, opacity, and delay
        const randomSize = createRandomNumber(5, 200);
        const randomOpacity = createRandomNumber(0.1, .9);
        const randomDelay = createRandomNumber(0, 10);
        const randomTop = createRandomNumber(0, window.innerHeight);
        const randomLeft = createRandomNumber(0, window.innerWidth);

        spark.style.animationDelay = `${randomDelay}s`;
        spark.style.width = `${randomSize}px`;
        spark.style.opacity = randomOpacity;
        spark.style.top = `${randomTop}px`;
        spark.style.left = `${randomLeft}px`;

        container.appendChild(spark);

    }

    // Create multiple falling sparkles
    for (let i = 0; i < 20; i++) {
        createSparkle(sparkleContainer);
    }

    //Create multiple static sparkles
    //for (let i = 0; i < 3; i++) {
    //  createSparkle(staticSparkleContainer);
    //}
});
//================================================Statistics JS==========================================================
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
//================================================sponsor JS==========================================================
const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

nextButton.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft -= slideWidth;
});
//================================================FAQ JS==========================================================
document.addEventListener("DOMContentLoaded", function () {
    var accordions = document.getElementsByClassName("accordion");

    for (var i = 0; i < accordions.length; i++) {
        accordions[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }
});