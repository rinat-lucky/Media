window.addEventListener('DOMContentLoaded', () => {

    const tabs = document.querySelectorAll('.tabheader__item');
    const tabsContent = document.querySelectorAll('.tabcontent');  
    const tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.style.display = 'none';
            // item.classList.add('hide');
            // item.classList.remove('show', 'fade');
        });

        tabs.forEach(tab => {
            tab.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].style.display = 'block';
        // tabsContent[i].classList.add('show', 'fade');
        // tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });


    // new Swiper('.interior__slider-container', {
    //     navigation: {
    //         nextEl: '.swiper-button-next1',
    //         prevEl: '.swiper-button-prev1'
    //     },
    //     grabCursor: true,
    //     slidesPerGroup: 1,
    //     loop: true,

    //     breakpoints: {
    //         375: {
    //             slidesPerView: 1
    //         },
    //         768: {
    //             slidesPerView: 2
    //         }
    //     }
    // });

    // new Swiper('.news__slider-container', {
    //     navigation: {
    //         nextEl: '.swiper-button-next',
    //         prevEl: '.swiper-button-prev'
    //     },
    //     grabCursor: true,
    //     slidesPerGroup: 1,
    //     loop: true,

    //     breakpoints: {
    //         375: {
    //             slidesPerView: 1
    //         },
    //         768: {
    //             slidesPerView: 2
    //         }
    //     }
    // });
});