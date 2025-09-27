
document.addEventListener('DOMContentLoaded', function() {
  const burgerBtn = document.querySelector('.burger_btn');
  const navMenu = document.querySelector('.nav-menu');

  burgerBtn.addEventListener('click', function() {
    burgerBtn.classList.toggle('open');
    navMenu.classList.toggle('active');
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

document.addEventListener('DOMContentLoaded', function() {
  // Получаем блок form
  const formBlock = document.querySelector('.form');

  // Проверяем, найден ли блок form
  if (formBlock) {
    // Получаем input и button внутри form, используя более конкретные селекторы
    const inputElement = formBlock.querySelector('input[type="email"]');
    const buttonElement = formBlock.querySelector('button[type="button"]');

    // Проверяем, найдены ли input и button
    if (inputElement && buttonElement) {
      // Добавляем обработчик события click на button
      buttonElement.addEventListener('click', function() {
        // Получаем значение из input
        const email = inputElement.value;

        // Проверяем email на пустоту
        if (email === "") {
          alert("Please enter your email address.");
          return;
        }

        // Отправляем данные на сервер (замените на свой endpoint)
        fetch('/your-email-endpoint', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email: email })
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          console.log('Success:', data);
          alert("Email sent successfully!");
        })
        .catch(error => {
          console.error('Error:', error);
          alert("Error sending email: " + error);
        });

          // Очищаем поле ввода (по желанию)
          inputElement.value = "";

      });
    } else {
      console.error('Input or button not found within the form block.');
    }
  } else {
    console.error('Form block not found.');
  }
});

 $(document).ready(function() {
            // Обработчик кликов по ссылкам меню
            $('.menu-link').on('click', function(e) {
                e.preventDefault(); // Предотвращаем стандартное поведение ссылки (перезагрузку страницы)

                var targetId = $(this).attr('href'); // Получаем ID секции, на которую нужно перейти

                // Плавная прокрутка к секции
                $('html, body').animate({
                    scrollTop: $(targetId).offset().top
                }, 1); // Скорость анимации (в миллисекундах)
            });
        });