new Swiper('.main__swiper', {
  pagination: {
    el: '.swiper-pagination',
    clickTable: true ,
  },
  spaceBetween: 16,
  breakpoints: {
    320: {
      slidesPerView: 1.3,
    },
    375: {
      slidesPerView: 1.5,
    },

    425: {
      slidesPerView: 1.7,
    },

    600: {
      slidesPerView: 2.4,
    }
  },
});

let logoList = document.querySelectorAll('.image-slide');
let showMoreButton = document.querySelector('.show-more__button');

showMoreButton.onclick = function () {
 
    for (let i = 0; i < logoList.length; i++) {
      if (logoList[i].classList.contains('hiden')) {
        logoList[i].classList.remove('hiden');
        logoList[i].classList.add('not-hiden');
        showMoreButton.textContent = 'Скрыть';
      } else if (logoList[i].classList.contains('not-hiden')) {
        logoList[i].classList.add('hiden');
        logoList[i].classList.remove('not-hiden');
        showMoreButton.textContent = 'Показать все';
      };
    };
    showMoreButton.classList.toggle('reverse');
};
