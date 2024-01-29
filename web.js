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
    const maxScroll = slidesContainer.scrollWidth - slidesContainer.clientWidth + 1;

    // Check if next slide is beyond the last slide
    if (slidesContainer.scrollLeft + slideWidth >= maxScroll) {
        // Reset to the first slide
        slidesContainer.scrollLeft = 0;
    } else {
        // Scroll to the next slide
        slidesContainer.scrollLeft += slideWidth;
    }
});

prevButton.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;

    // Check if previous slide is beyond the first slide
    if (slidesContainer.scrollLeft - slideWidth < 0) {
        // Reset to the last slide
        slidesContainer.scrollLeft = slidesContainer.scrollWidth - slidesContainer.clientWidth;
    } else {
        // Scroll to the previous slide
        slidesContainer.scrollLeft -= slideWidth;
    }
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

//===============================================Scroll function mascot================================================
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    var footer = document.getElementById('footer');
    var fixedImage = document.querySelector('.mascot1');

    // Get the position of the footer
    var footerPosition = footer.getBoundingClientRect();

    // If the top of the footer is above or at the bottom of the viewport
    if (footerPosition.top <= window.innerHeight) {
        fixedImage.style.bottom = footerPosition.height + 'px';
    } else {
        fixedImage.style.bottom = '10px';
    }
}
