import { Image } from 'antd';
import React from 'react';
import styles from './Gallery.module.scss';
import { ReactMarques } from 'react-marques';


export const Gallery = () => {
    const photos = [
        {
            id: 1,
            photo: './gallery/photo_2024-08-28_19-25-45.jpg'
        },
        {
            id: 2,
            photo: './gallery/photo_2024-08-28_19-25-48.jpg'
        },
        {
            id: 3,
            photo: './gallery/photo_2024-08-28_19-25-49.jpg'
        },
        {
            id: 4,
            photo: './gallery/photo_2024-08-28_19-25-50.jpg'
        },
        {
            id: 5,
            photo: './gallery/photo_2024-08-28_19-25-52.jpg'
        },
        {
            id: 6,
            photo: './gallery/photo_2024-08-28_19-25-53.jpg'
        },
        {
            id: 7,
            photo: './gallery/photo_2024-08-28_19-25-54.jpg'
        },
        {
            id: 8,
            photo: './gallery/photo_2024-08-28_19-25-55 (2).jpg'
        },
        {
            id: 9,
            photo: './gallery/photo_2024-08-28_19-25-55.jpg'
        },
        {
            id: 10,
            photo: './gallery/photo_2024-08-28_19-25-56.jpg'
        },
        {
            id: 11,
            photo: './gallery/photo_2024-08-28_19-25-57.jpg'
        },
        {
            id: 12,
            photo: './gallery/photo_2024-08-28_19-25-58.jpg'
        },
    ]
    const [direction, setDirection] = React.useState('down');
    React.useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setDirection('left'); 
            } else {
                setDirection('down');
            }
        };
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
  return (
    <div className={styles.galleryContainer} id='gallery'>
        <ReactMarques direction={direction} className={styles.galleryMarquee} >
            <Image src={photos[0].photo} height={'500px'} style={{ margin: 'auto' }} />
            <Image src={photos[1].photo} height={'500px'} style={{ margin: 'auto' }} />
            <Image src={photos[2].photo} height={'500px'} style={{ margin: 'auto' }} />
            <Image src={photos[3].photo} height={'500px'} style={{ margin: 'auto' }} />
        </ReactMarques>
        <ReactMarques direction={direction} className={`${styles.galleryMarquee} ${styles.galleryMarquee2}`} >
            <Image src={photos[4].photo} height={'500px'} style={{ margin: 'auto' }} className={styles.marqueePhoto} />
            <Image src={photos[5].photo} height={'500px'} style={{ margin: 'auto' }} className={styles.marqueePhoto} />
            <Image src={photos[6].photo} height={'500px'} style={{ margin: 'auto' }} className={styles.marqueePhoto} />
            <Image src={photos[7].photo} height={'500px'} style={{ margin: 'auto' }} className={styles.marqueePhoto} />
        </ReactMarques>
        <ReactMarques direction={direction} className={styles.galleryMarquee} >
            <Image src={photos[8].photo} height={'500px'} style={{ margin: 'auto' }} />
            <Image src={photos[9].photo} height={'500px'} style={{ margin: 'auto' }} />
            <Image src={photos[10].photo} height={'500px'} style={{ margin: 'auto' }} />
            <Image src={photos[11].photo} height={'500px'} style={{ margin: 'auto' }} />
        </ReactMarques>
        <div className={styles.wrapper}></div>
    </div>
  )
}
