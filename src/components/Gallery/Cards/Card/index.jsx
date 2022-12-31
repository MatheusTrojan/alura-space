import React from 'react'
import open from "./open.png"
import favorito from "./favorito.png"

export default function Card({ item, styles }) {
  return (
    <li key={item.key} className={styles.gallery__card}>
    <img 
        className={styles.gallery__image}
        src={item.image}
        alt={item.title}
    />
    <p className={styles.gallery__description}>{item.title}</p>
    <div>
        <p>{item.credits}</p>
        <span>
        <img src={favorito} alt="ícone coração de curtir"/>
        <img src={open} alt="ícone de abrir modal"/>
        </span>
    </div>
    </li>
  )
}
