let burger = document.querySelector('.burger_btn');
burger.onclick = function() {
    this.classList.toggle('active');
}
document.addEventListener('DOMContentLoaded', function() {
    const burgerBtn = document.querySelector('.burger_btn');
    const nav = document.querySelector('.nav-menu');

    burgerBtn.addEventListener('click', function() {
        nav.classList.toggle('active');
        burgerBtn.classList.toggle('active'); 
    });
});





document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1, // Показывать один слайд на экране
    spaceBetween: 30, // Расстояние между слайдами
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      // Когда ширина экрана >= 640px
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // Когда ширина экрана >= 768px
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      // Когда ширина экрана >= 1024px
      1024: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    }
  });
});
