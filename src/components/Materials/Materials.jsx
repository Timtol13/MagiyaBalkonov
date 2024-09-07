import React from 'react';
import styles from './Materials.module.scss';
import mainStyles from '../Main/Main.module.scss'
import { Image } from 'antd';

export const Materials = () => {
  const contentBlocks = [
    {
      class: 'text-left',
      title: "Дерево",
      description: 'Дерево – это классический и экологически чистый материал, который придаст вашему балкону уют и тепло. Деревянные панели обладают отличной теплоизоляцией и долговечностью. Они легко поддаются обработке, что позволяет создавать уникальные дизайнерские решения. Дерево требует регулярного ухода, но его естественная красота и комфорт стоят этих усилий.',
      image: './photo_2024-08-01_23-50-20.jpg'
    },
    {
      class: 'text-right',
      title: "Ламинат",
      description: 'Ламинат – это современный и практичный материал для отделки балконов. Он отличается высокой износостойкостью и устойчивостью к механическим повреждениям. Ламинат легко монтируется и не требует сложного ухода. Благодаря разнообразию текстур и цветов, ламинат может имитировать различные природные материалы, такие как дерево или камень, что позволяет создать стильный и современный интерьер.',
      image: './photo_2024-08-28_19-17-45.jpg'
    },
    {
      class: 'text-left',
      title: "ПВХ",
      description: 'ПВХ (поливинилхлорид) – это универсальный и экономичный материал для отделки балконов. ПВХ-панели обладают высокой влагостойкостью и устойчивостью к ультрафиолетовому излучению, что делает их идеальными для использования в любых климатических условиях. Они легко моются и не требуют специального ухода. ПВХ-панели доступны в широком ассортименте цветов и текстур, что позволяет подобрать идеальный вариант для любого интерьера.',
      image: './photo_2024-08-01_23-50-27.jpg'
    },
  ]
  return (
    <div className={styles.materialsContainer} id='meterials'>
        <h1 className={mainStyles.blockTitle}>Материалы</h1>
        <div className={styles.materialsContent}>
            { contentBlocks.map((el, index) => {
                return <div className={styles.materialsBlock} key={index}>
                  <div className={el.class === 'text-left' ? styles.blockTitleLeft : styles.blockTitleRight}>
                    <h2>{el.title}</h2>
                    <hr/>
                  </div>
                  <div className={el.class === 'text-left' ? styles.materialBlockContentLeft : styles.materialBlockContentRight}>
                    <div className={styles.contentText}>
                      <p>
                        {el.description}
                      </p>
                    </div>
                    <div className={styles.contentImage}>
                      <Image src={el.image} alt={el.title}/>
                    </div>
                  </div>
                </div>
            })
            }
        </div>
    </div>
  )
}
