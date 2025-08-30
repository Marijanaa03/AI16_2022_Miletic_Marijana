const track = document.getElementById('cardCarousel');
const prevBtn = document.querySelector('.carousel-prev');
const nextBtn = document.querySelector('.carousel-next');

function scrollOneCard(direction) {
  const card = track.querySelector('.card');
  const cardWidth = card.offsetWidth + 15; // 15px margin

  track.scrollBy({
    left: direction === 'next' ? cardWidth : -cardWidth,
    behavior: 'smooth'
  });
}

prevBtn.addEventListener('click', () => scrollOneCard('prev'));
nextBtn.addEventListener('click', () => scrollOneCard('next'));
