import { Image } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'

export const Header = () => {
  const [scrollable, setScrollable] = React.useState(false)
  const [scrollY, setScrollY] = React.useState(0);
  const [openSideBar, setSideBar] = React.useState(false)

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setScrollY(currentScrollY);

    if (currentScrollY > 50) {
        setScrollable(true);
    } else {
        setScrollable(false);
    }
  };

  React.useEffect(() => {
    if (window.innerWidth <= 768){
      setScrollable(true)
    }
    else{
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);
  return (
    <header className={`${styles.header} ${scrollable ? styles.scroll : ''}`}>
        <nav className={`${styles.headerNav} ${styles.Headercontainer}`}>
            <div className={styles.headerList}>
                <Link to={'/'}>
                    <Image
                        className={scrollable ? styles.headerLogoScrolled : styles.headerLogo}
                        src={scrollable ? './scrolled_logo.svg' : './logo-without-bg.png'}
                        preview={false}
                    />
                </Link>
                <div className={styles.headerLinks}>
                    <a href={'#home'}>Главная</a>
                    <a href={'#services'}>Услуги</a>
                    <a href={'#meterials'}>Материалы</a>
                    <a href={'#gallery'}>Наши работы</a>
                    <a href={'#testimonials'}>Отзывы</a>
                    <a href={'#feedback'}>Оставить заявку</a>
                </div>
                {scrollable && (
                    <>
                    <a href='tel:+375297903708' className={styles.phoneMenu}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
                      +375 29 790 3708
                    </a>
                      <div className={styles.hamburgerMenu}>
                          <button onClick={() => {setSideBar(true)}}>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>
                          </button>
                      </div>
                    </>
                )
                }
            </div>
        </nav>
        <div className={`${styles.sidebar} ${openSideBar && styles.active}`}>
          <button className={styles.closeBtn} onClick={() => {setSideBar(false)}}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="#001736" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
          </button>
          <div className={styles.sidebarContainer}>
            <a href={'#home'}>Главная</a>
            <a href={'#services'}>Услуги</a>
            <a href={'#meterials'}>Материалы</a>
            <a href={'#gallery'}>Наши работы</a>
            <a href={'#testimonials'}>Отзывы</a>
            <a href={'#feedback'}>Оставить заявку</a>
            <a href={'tel:375297903790'} style={{ marginTop: '120%', color: '#062651' }}>+375(29)790-37-90</a>
          </div>
        </div>
    </header>
  )
}
