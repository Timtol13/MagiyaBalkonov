import React from 'react';
import styles from './Testimonials.module.scss';
import mainStyles from '../Main/Main.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Virtual } from 'swiper/modules';
import SwiperCore from 'swiper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

SwiperCore.use([Virtual]);


export const Testimonials = () => {
    const slides = [
        {
            name: 'Дина Козырь',
            content: `Спасибо двум молодым ребятам: Виктору и Евгению за реализацию такой карасатищи, они ответят на все вопросы, исправят чужие косяки, балкон за два дня это реально с MAGIYA BALKONOV`,
            rating: 5
        },
        {
            name: 'Елена Бондарчик',
            content: `Большое спасибо за профессиональную, качественную, аккуратную работу. Буду рекомендовать эту фирму своим знакомым.`,
            rating: 4
        },
        {
            name: 'Андрей Шидловский ',
            content: `Мастера супер! Вежливые, аккуратные. Всё сделано на совесть, за собой оставили порядок. Спасибо им большое!`,
            rating: 3
        },
        {
            name: 'Виталий Лазарчук ',
            content: `Работа мастеров понравилась, заказывал утепление балкона. Специалисты опытные работают без нареканий.`,
            rating: 2
        }
    ]

    // const getStars = (rating) => {
    //     const arr = ['0', '0', '0', '0', '0']
    //     for(let i = 0; i < rating; i++){
    //         arr[i] = '1'
    //     }
    //     arr.map((el, index) => {
    //         console.log(<span key={index}>
    //             {el === '1'? <i class="fa-solid fa-star"></i> :  <i class="fa-regular fa-star"></i>}
    //         </span>
    //         );
    //     })
    //     return <span className={styles.starsContainer}>
    //         {
    //             arr.map((el, index) => {
    //                 return <span key={index} className={styles.star}>
    //                     {el === '1'?
    //                     <svg xmlns="http://www.w3.org/2000/svg" fill="#001736" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
    //                      :  
    //                      <svg xmlns="http://www.w3.org/2000/svg" fill="#F0F0F040" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
    //                     }
    //                 </span>
    //             })
    //         }
    //     </span>
    // }
  return (
    <div className={styles.testimonialsContainer} id='testimonials'>
        <h1 className={mainStyles.blockTitle}>Отзывы</h1>
        <Swiper
            slidesPerView={3}
            centeredSlides={true}
            spaceBetween={10}
            navigation={false}
            initialSlide={2}
            className={styles.testimonialsSlider}
            slidePrevClass={styles.swiperSlidePrev}
            slideNextClass={styles.swiperSlideNext}
            slideActiveClass={styles.swiperSlideActive}
            breakpoints={{
                992:{
                    slidesPerView: 3,
                },
                768: {
                    slidesPerView: 1,
                  },
                  576: {
                    slidesPerView: 1,
                  },
                  480: {
                    slidesPerView: 1,
                  },
                  392: {
                    slidesPerView: 1,
                  },
                  360: {
                    slidesPerView: 1,
                  },
                  342: {
                    slidesPerView: 1,
                  },
                  320:{
                    slidesPerView: 1,
                  }
                }}
        >
            {slides.map((slideContent, index) => (
            <SwiperSlide key={index} className={styles.testimonialsSliderSlide} virtualIndex={index}>
                <div className={styles.testipmonialsSliderContent}>
                    <h3>{slideContent.name}</h3>
                    <p>
                        {slideContent.content}
                    </p>
                    {/* {getStars(slideContent.rating)} */}
                </div>
            </SwiperSlide>
            ))}
      </Swiper>
    </div>
  )
}

// <i class="fa-solid fa-star"></i>
