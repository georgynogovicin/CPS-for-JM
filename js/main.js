let servicesSwiper = null;
let screenWidth = window.matchMedia("(max-width: 767px)");


//Swiper Init
const serviesSwiperInit = function() {
    if (!servicesSwiper) {
        servicesSwiper = new Swiper('.swiper-container', {
            direction: 'horizontal',
            loop: false,
            spaceBetween: 16,
            slidesPerView: 'auto',
            mousewheel: true,
            slidesOffsetBefore: 16,
            slidesOffsetAfter: 16,
          
            
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
              speed: 200,
            },
          
           
          })
    }
};


//Swiper Destroy
const servicesSwiperDestroy = function() {
    if (servicesSwiper) {
        servicesSwiper.destroy();
        servicesSwiper = null;
    }
};


let mySwiper = function() {
    if (screenWidth.matches === true) {
        serviesSwiperInit()
    } else {
        servicesSwiperDestroy()
    }
};

screenWidth.addListener(mySwiper);

mySwiper();