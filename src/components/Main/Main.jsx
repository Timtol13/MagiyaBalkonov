import React from 'react';
import { Route, Router } from 'react-router';
import { Header } from '../Header/Header';
import styles from './Main.module.scss';
import { Home } from '../Home/Home';
import { Services } from '../Services/Services';
import { Materials } from '../Materials/Materials';
import { Feedback } from '../Feedback/Feedback';
import { Gallery } from '../Gallery/Gallery';
import { Testimonials } from '../Testimonials/Testimonials';
import { Footer } from '../Footer/Footer';

export const Main = () => {
  return (
    <div className={styles.main}>
        <Header />
        <div className={styles.container}>
            <Home />
            <Services />
            <Materials />
            <Feedback />
            <Gallery  />
            <Testimonials />
        </div>
        <Footer />
    </div>
  )
}
