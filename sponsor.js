const slidesContainer = document.getElementById("slides-container");
      const slide = document.querySelector(".slide");
      const prevButton = document.getElementById("slide-arrow-prev");
      const nextButton = document.getElementById("slide-arrow-next");

      nextButton.addEventListener("click", () => {
        const slideWidth = slide.clientWidth;
        const maxScroll = slidesContainer.scrollWidth - slidesContainer.clientWidth;
    
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