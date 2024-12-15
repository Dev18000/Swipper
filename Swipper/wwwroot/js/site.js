window.initializeSwiper = () => {
    new Swiper('.swiper-container', {
        direction: 'vertical', // Вертикальный режим
        mousewheel: true,     // Поддержка колесика мыши
        slidesPerView: 1,
        spaceBetween: 10,
        loop: false,          // Отключить бесконечную прокрутку, если не требуется
    });
};
