// const wnd = $(window);
// const isTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;
// const    wndHeight = window.innerHeight;
$(".openmenu").click(function() {
    $(".hedear_menu").toggleClass("active");

  });
  

  $(document).ready(function(){
    $('.advantages_slider').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: false,
      infinite: false,
      focusOnSelect: true, // Эта опция активирует фокус на выбранных слайдах
  
      responsive: [
        {
          breakpoint: 1450,
          settings: {
            variableWidth: true,
            centerMode: true,
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 1250,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode: false,
          }
        }
      ]
    });
  });
  

  $(document).ready(function() {
    var slider = $('.sace_slider');
    
    slider.on('init', function(event, slick) {
      $('.slick-slide').click(function() {
        var index = $(this).data('slick-index');
        slider.slick('slickGoTo', index);
      });
    });
  
    slider.slick({
      centerMode: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      dots: true,
      variableWidth: true,
      infinite: true,
      waitForAnimate: false,
      centerPadding: '50px',
      prevArrow: $('.slider-prev'),
      nextArrow: $('.slider-next'),
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            variableWidth: false
          }
        }
      ]
    });
  });
  

let elements = document.getElementsByClassName('anim');

// Задаем CSS-свойство transition для плавного перехода
for (let i = 0; i < elements.length; i++) {
  let element = elements[i];
  element.style.transition = 'transform 2s ease-in-out';
}

// Запускаем функцию для обновления позиций элементов каждую секунду
setInterval(function() {
  for (let i = 0; i < elements.length; i++) {
    let element = elements[i];

    // Добавляем случайное смещение по оси X и Y
    element.style.transform = 'translate(' + getRandomOffset() + 'px, ' + getRandomOffset() + 'px)';
  }
}, 2000);

// Функция для генерации случайного смещения в диапазоне от -40 до 40
function getRandomOffset() {
  return Math.floor(Math.random() * -40) - 40;
}

function animateSVG2() {
  var paths2 = document.querySelectorAll('#animLine path');
  var circles = document.querySelectorAll('#animLine circle');

  paths2.forEach(function (path, index) {
    var length = path.getTotalLength();

    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length,
    });

    // Используем ScrollTrigger для запуска анимации при первом доскролливании
    gsap.to(path, {
      strokeDashoffset: 0,
      duration: 1.2,
      ease: "power2.inOut",
      delay: 0.2 * index,
      scrollTrigger: {
        trigger: path, // Элемент, относительно которого происходит доскролливание
        once: true, // Запустить анимацию только один раз
      },
    });
  });

  circles.forEach(function (circle, index) {
    // Используем ScrollTrigger для запуска анимации при первом доскролливании
    gsap.to(circle, {
      opacity: 1, // Начинаем с полностью прозрачного круга
      duration: 0.1, // Длительность анимации появления
      ease: "power2.inOut",
      delay: 0.2 * index,
      scrollTrigger: {
        trigger: circle, // Элемент, относительно которого происходит доскролливание
        once: true, // Запустить анимацию только один раз
      },
    });
  });

  // Добавим код для другого элемента
  const fadeElements = document.querySelectorAll('.appearance');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, {
    threshold: 0.5 // Порог пересечения 0.5 означает, что элемент считается видимым, если видно 50% его области
  });

  fadeElements.forEach((element) => {
    observer.observe(element);
  });
}

// Вызывайте функцию после загрузки документа
document.addEventListener("DOMContentLoaded", animateSVG2);



  // Функция анимации мерцания
  function flicker() {
      gsap.to('.blik', {
          keyframes: [
              { opacity: 1, duration: 0.1 },
              { opacity: 0, duration: 0.15 },
              { opacity: 1, duration: 0.1 },
              { opacity: 0.9, duration: 0.2 },
              { opacity: 1, duration: 0.1 },
              { opacity: 0.5, duration: 0.1 },
              { opacity: 1, duration: 2 }
          ],
          onComplete: function () {
              gsap.to('.blik', { opacity: 1, duration: 0, onComplete: flicker });
          }
      });
  }


  // Устанавливаем начальное значение opacity в 0
  gsap.set('.blik', { visibility: 'visible', opacity: 0 });

  // Запускаем анимацию мерцания после 6.8 секунд
  setTimeout(flicker, 0);



