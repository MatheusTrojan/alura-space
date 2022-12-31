import React from 'react'
import Tags from '../Tags'
import styles from "./Gallery.module.scss"
import photos from "./photos.json"

export default function Gallery() {
  return (
    <section className={styles.gallery}>
        <h2>Navegue pela Galeria</h2>
        <Tags />
        <ul className={styles.gallery__lista}>
          {photos.map((photo) => {
            return (
              <li></li>
            )
          })}    
        </ul>
    </section>
  )
}
