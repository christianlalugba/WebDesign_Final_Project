
  // Hero fade-in animation
  document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroImages = document.querySelectorAll('.hero-images img');

    heroTitle.style.opacity = 0;
    heroSubtitle.style.opacity = 0;

    // Animate hero text
    setTimeout(() => heroTitle.style.opacity = 1, 500);
    setTimeout(() => heroSubtitle.style.opacity = 1, 1000);

    // Animate hero images
    heroImages.forEach((img, index) => {
      img.style.opacity = 0;
      setTimeout(() => img.style.opacity = 1, 1500 + index * 500);
    });
  });

  // Highlight video buttons
  const highlightButtons = document.querySelectorAll('.highlight-btn');
  highlightButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const video = btn.closest('figure').querySelector('video');
      video.play();
      video.scrollIntoView({ behavior: 'smooth' });
    });
  });
  // player-search.js
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('player-search');
    const playerCards = document.querySelectorAll('.player-card');

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();

        playerCards.forEach(card => {
            const name = card.getAttribute('data-name').toLowerCase();
            if (name.includes(query)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

