import React from "react";
import github from "./github.svg";
import instagram from "./instagram.svg";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__icons}>
        <a
          href="https://github.com/MatheusTrojan"
          target="_blank"
          rel="noreferrer"
        >
          <img src={github} alt="ícone do facebook" />
        </a>
        <a
          href="https://www.instagram.com/fridas.hotdog/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagram} alt="ícone do instagram" />
        </a>
      </div>
      <p>Desenvolvido por Matheus Trojan</p>
    </footer>
  );
}