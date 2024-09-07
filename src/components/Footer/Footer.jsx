import React from 'react'
import styles from './Footer.module.scss'
import { Image } from 'antd'

export const Footer = () => {
  return (
    <footer className={styles.footerContainer} style={{ backgroundImage: 'url(./footer_bg.svg)' }}>
        <div className={styles.footerBlock}>
            <div className={styles.footerBlockLeft}>
                <div className={styles.footerBlockLeftImage}>
                    <Image src='./logo-without-bg.png' alt=''/>
                </div>
                <div className={styles.footerBlockLeftInfo}>
                    <h4>Контакты</h4>
                    <h4>+375297903708</h4>
                    <h4>info@mgalkonov.com</h4>
                </div>
            </div>
            <div className={styles.footerBlockRight}>
                <div className={styles.footerLinks}>
                    <a href={'#home'}>Главная</a>
                    <a href={'#services'}>Услуги</a>
                    <a href={'#meterials'}>Материалы</a>
                    <a href={'#feedback'}>Оставить заявку</a>
                    <a href={'#gallery'}>Наши работы</a>
                    <a href={'#testimonials'}>Отзывы</a>
                </div>
            </div>
        </div>
    </footer>
  )
}
