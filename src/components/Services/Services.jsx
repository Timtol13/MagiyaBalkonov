import React from 'react';
import styles from './Services.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import mainStyles from '../Main/Main.module.scss'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Image } from 'antd';

export const Services = () => {
    const sliderItems = [
        {
            image: './photo_2024-08-28_19-31-36.jpg',
            title: 'Мебель для лоджий и балконов',
            description: `Изготавливаем мебель для балконов и лоджий из самых 
                современных и качественных материалов исходя из ваших вкусов, желаний и возможностей:<br/><br/>
                <ul>
                <li>Тумбы<br/></li>
                <li>Столы<br/></li>
                <li>Шкафы<br/></li>
                <li>Шкафы-купе<br/></li>
                <li>Полки<br/></li>
                <li>Ящики<br/></li>
                <li>Ваш вариант</li>
                </ul>`,
            link: '/#feedback'
        },
        {
            image: './cozy-house-concept-with-wooden-toy-house.jpg',
            title: 'Утепление балконов и лоджий',
            description: `Утепляем балконы и лоджии «под ключ» самыми современными и качественными материалами исходя 
            из ваших вкусов, желаний и возможностей:<br/><br/>
                <ul>
                <li>Пенопласт<br/></li>
                <li>Пеноплекс<br/></li>
                <li>Фольгоизол<br/></li>
                <li>Ваш вариант</li>
                </ul>`,
            link: '/#feedback'
        },
        {
            image: './photo_2024-08-01_23-50-36.jpg',
            title: 'Остекление балконов и лоджий',
            description: `Остекляем балконы и лоджии самыми современными и качественными 
            материалами исходя из ваших вкусов, желаний и возможностей:<br/><br/>
                <ul>
                <li>Алюминиевый профиль<br/></li>
                <li>Профиль ПВХ<br/></li>
                </ul>`,
            link: '/#feedback'
        },
        {
            image: './photo_2024-08-28_22-09-20.jpg',
            title: 'Наружная отделка балконов',
            description: `Отделываем парапеты балконов самыми современными и качественными материалам исходя из ваших вкусов, желаний и возможностей:<br/><br/>
                <ul>
                <li>Профнастил<br/></li>
                <li>Сайдинг<br/></li>
                <li>Ваш материал</li>
                </ul>`,
            link: '/#feedback'
        },
        {
            image: './photo_2024-08-28_22-08-27.jpg',
            title: 'Отделка балконов и лоджий',
            description: `Отделываем балконы самыми современными и качественными материалам исходя из ваших вкусов, желаний и возможностей:<br/><br/>
                <ul>
                <li>Панели ПВХ<br/></li>
                <li>Вагонка<br/></li>
                <li>Вагонка-штиль<br/></li>
                <li>Имитация бруса<br/></li>
                <li>Панели МДФ</li>
                <li>Ламинат</li>
                <li>Ваш материал</li>
                </ul>`,
            link: '/#feedback'
        },
        {
            image: './photo_2024-08-01_23-50-51.jpg',
            title: 'Установка крыши на балконы и лоджии',
            description: `Устанавливаем крыши на балконы и лоджии из самых современных и качественных материалов 
            исходя из ваших вкусов, желаний и возможностей:<br/><br/>
                <ul>
                <li>Профнастил<br/></li>
                <li>Ондулин<br/></li>
                <li>Ваш материал</li>
                </ul>`,
            link: '/#feedback'
        },
    ]

    return (
        <div className={styles.servicesContainer} id='services'>
            <h1 className={mainStyles.blockTitle}>Услуги</h1>
            <Swiper
                key={'services'}
                modules={[ Navigation, A11y ]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                loop
            >
                {
                    sliderItems.map((el, index) => {
                        return <SwiperSlide key={index}>
                            <div className={styles.servicesSlide} key={index}>
                                <div className={styles.servicesSlideImage}>
                                    <Image src={el.image} />
                                </div>
                                <div className={styles.servicesSlideInfo}>
                                    <h2>
                                        {el.title}
                                    </h2>
                                    <p dangerouslySetInnerHTML={{ __html: el.description }} />
                                    <a href={el.link}>
                                        Подробнее <svg width="32" height="32" viewBox="0 0 32 32" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M2.5 16C2.5 15.6022 2.65804 15.2206 2.93934 14.9393C3.22064 14.658 3.60218 14.5 4 14.5H24.38L18.94 9.06C18.675 8.77565 18.5308 8.39956 18.5376 8.01095C18.5445 7.62235 18.7019 7.25158 18.9768 6.97675C19.2516 6.70193 19.6224 6.5445 20.011 6.53765C20.3996 6.53079 20.7757 6.67504 21.06 6.94L29.06 14.94C29.3409 15.2212 29.4987 15.6025 29.4987 16C29.4987 16.3975 29.3409 16.7787 29.06 17.06L21.06 25.06C20.9227 25.2074 20.7571 25.3256 20.5731 25.4076C20.3891 25.4895 20.1905 25.5336 19.989 25.5372C19.7876 25.5407 19.5876 25.5037 19.4008 25.4282C19.214 25.3528 19.0444 25.2405 18.9019 25.0981C18.7595 24.9556 18.6472 24.786 18.5718 24.5992C18.4963 24.4124 18.4593 24.2124 18.4628 24.011C18.4664 23.8095 18.5105 23.6109 18.5924 23.4269C18.6744 23.2429 18.7926 23.0773 18.94 22.94L24.38 17.5H4C3.60218 17.5 3.22064 17.342 2.93934 17.0607C2.65804 16.7794 2.5 16.3978 2.5 16Z" fill="#001736"/>
                                                </svg>
                                    </a>
                                </div>
                            </div>
                        </SwiperSlide>
                    })
                }
            </Swiper>
        </div>
    )
}