import React from 'react'
import popularPhotos from "./photos-popular.json"
import styles from "./Popular.module.scss"

export default function Popular() {
  return (
    <aside className={styles.popular}>
        <h2>Populares</h2>
        <ul className={styles.popular__images}>
            {popularPhotos.map((photo) => {
                return (
                    <li key={photo.id}>
                        <img src={photo.path} alt={photo.alt}/>
                    </li>
                )
            })}
        </ul>
        <button>Ver mais fotos</button>
    </aside>
  )
}
