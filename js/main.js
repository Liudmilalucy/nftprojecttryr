const dropdownItems = document.querySelectorAll('.dropdown')

dropdownItems.forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault()

    const wrapper = btn.querySelector('.dropdown__list-wrapper')

    const isActive = btn.classList.toggle('active')

    wrapper.style.maxHeight = isActive ? wrapper.scrollHeight + 'px' : null
  })
})

gsap.registerPlugin(ScrollTrigger)
let jump = window.matchMedia("(max-width: 1024px)").matches ? 16 : 120

gsap.to('.lines-direct', {x: () => -(document.querySelector('.lines__items').scrollWidth - window.innerWidth + jump), scrollTrigger: {
  trigger: '.wrapper',
  start: "top top",
  end: 'center',
  endTrigger: '.lines',
  scrub: 1,
}})
gsap.to('.lines-reverse', {x: () => document.querySelector('.lines__items').scrollWidth - window.innerWidth + jump, scrollTrigger: {
  trigger: '.wrapper',
  start: "top top",
  end: 'center',
  endTrigger: '.lines',
  scrub: 1,
}})


new Swiper('.creators__slider', {
  slidesPerView: 'auto',
  spaceBetween: 46
})


window.addEventListener('DOMContentLoaded', () => {
  const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
    let swiper;

    breakpoint = window.matchMedia(breakpoint);

    const enableSwiper = function(className, settings) {
      swiper = new Swiper(className, settings);

      if (callback) {
        callback(swiper);
      }
    }

    const checker = function() {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings);
      } else {
        if (swiper !== undefined) swiper.destroy(true, true);
        return;
      }
    };

    breakpoint.addEventListener('change', checker);
    checker();
  }

  const someFunc = (instance) => {
    if (instance) {
      instance.on('slideChange', function (e) {
        console.log('*** mySwiper.activeIndex', instance.activeIndex);
      });
    }
  };

  resizableSwiper(
    '(max-width: 1025px)',
    '.popular__slider',
    {
      slidesPerView: 'auto',
      spaceBetween: 12
    }
  );
  resizableSwiper(
    '(max-width: 768px)',
    '.journal__slider',
    {
      slidesPerView: 'auto',
      spaceBetween: 12
    }
  );

});
