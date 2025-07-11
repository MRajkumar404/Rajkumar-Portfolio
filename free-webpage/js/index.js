
  function highlightCenterCard() {
    const container = document.querySelector('#partners .swiper-container');
    const slides = container.querySelectorAll('.swiper-slide');

    let containerCenter = container.scrollLeft + container.offsetWidth / 2;

    let closest = null;
    let closestDistance = Infinity;

    slides.forEach((slide) => {
      const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
      const distance = Math.abs(containerCenter - slideCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closest = slide;
      }
    });

    slides.forEach((slide) => slide.classList.remove('highlight'));
    if (closest) closest.classList.add('highlight');
  }

  // Only run on mobile screen widths
  if (window.innerWidth <= 768) {
    const swiperContainer = document.querySelector('#partners .swiper-container');
    swiperContainer.addEventListener('scroll', () => {
      requestAnimationFrame(highlightCenterCard);
    });

    // Highlight on load too
    window.addEventListener('load', highlightCenterCard);
  }
