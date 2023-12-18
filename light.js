document.addEventListener('DOMContentLoaded', function () {
    const lightContainer = document.querySelector('.light');

    function createlight() {
        const light = document.createElement('img');
        light.src = 'images/sparkle.png';
        light.style.animationDuration = `${Math.random() * 3 + 4}s`;
        light.style.animationDelay = `${Math.random() * 3}s`;

        lightContainer.appendChild(light);

        // Set initial position
        light.style.top = `${Math.random() * window.innerHeight}px`;
        light.style.left = `${Math.random() * window.innerWidth}px`;


        light.style.opacity = 0.6

        // Animate position
        setInterval(() => {
            light.style.top = `${Math.random() * window.innerHeight}px`;
            light.style.left = `${Math.random() * window.innerWidth}px`;
            const randomSize = Math.random() * 95 + 5;
            sparkle.style.width = `${randomSize}px`;
            sparkle.style.height = `${randomSize}px`;
        }, Math.random() * 3000 + 4000);
    }

    // Create multiple lights
    for (let i = 0; i < 15; i++) {
        createlight();
    }
});


