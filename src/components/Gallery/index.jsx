import React from 'react'
import Tags from '../Tags'
import styles from "./Gallery.module.scss"
import photos from "./photos.json"
import open from "./open.png"
import favorito from "./favorito.png"

export default function Gallery() {
  return (
    <section className={styles.gallery}>
        <h2>Navegue pela Galeria</h2>
        <Tags />
        <ul className={styles.gallery__cards}>
          {photos.map((photo) => {
            return (
              <li key={photo.key} className={styles.gallery__card}>
                <img 
                  className={styles.gallery__image}
                  src={photo.image}
                  alt={photo.title}
                />
                <p className={styles.gallery__description}>{photo.title}</p>
                <div>
                  <p>{photo.credits}</p>
                  <span>
                    <img src={favorito} alt="ícone coração de curtir"/>
                    <img src={open} alt="ícone de abrir modal"/>
                  </span>
                </div>
              </li>
            )
          })}    
        </ul>
    </section>
  )
}
