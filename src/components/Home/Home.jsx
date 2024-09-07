import React from 'react';
import styles from './Home.module.scss';
import { Image } from 'antd';

export const Home = () => {
  return (
    <div className={styles.homeContainer} id='home'>
      <div className={styles.videoBlock}>
        <video controls={false} src={'./video.mp4'} autoPlay muted />
      </div>
      <div className={styles.gradienBg}></div>
      <div className={styles.homeContent}>
        <h1>
            Утепление
            Остекление
            Отделка
            балконов.
        </h1>
        <a href='#feedback'>
            Оставить заявку <Image preview={false} src='./arrow-right.svg'/>
        </a>
      </div>
    </div>
  );
};
