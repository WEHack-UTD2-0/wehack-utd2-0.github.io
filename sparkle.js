document.addEventListener('DOMContentLoaded', function () {
    const sparkleContainer = document.querySelector('.sparkle');
    const staticSparkleContainer = document.querySelector('.static-sparkle')

    function createRandomNumber(min, max) {
        return Math.random() * (max - min) + min;
    }

    function createSparkle(container) {
        const spark = document.createElement('img');
        spark.src = 'images/glow.png';

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


