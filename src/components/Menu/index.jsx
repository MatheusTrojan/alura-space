import React from 'react'
import home from "../../assets/icones/home-ativo.png"
import maisCurtidos from "../../assets/icones/mais-curtidas-inativo.png"
import maisVistos from "../../assets/icones/mais-vistas-inativo.png"
import novos from "../../assets/icones/novas-inativo.png"
import surpreendaSe from "../../assets/icones/surpreenda-me-inativo.png"
import styles from "./Menu.module.scss"

export default function Menu() {
  return (
    <nav className={styles.menu}>
        <ul className={styles.menu__list}>
            <li className={styles.menu__item}>
                <img src={home} alt="" />
                <a href="">Início</a>
            </li>
            <li className={styles.menu__item}>
                <img src={maisCurtidos} alt="" />
                <a href="">Mais curtidos</a>
            </li>
            <li className={styles.menu__item}>
                <img src={maisVistos} alt="" />
                <a href="">Mais vistos</a>
            </li>
            <li className={styles.menu__item}>
                <img src={novos} alt="" />
                <a href="">Novos</a>
            </li>
            <li className={styles.menu__item}>
                <img src={surpreendaSe} alt="" />
                <a href="">Surpreenda-se</a>
            </li>
        </ul>
    </nav>
  )
}
