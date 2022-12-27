import logo from "./logo-sem-escrita.png"
import search from "./search.png"
import styles from "./Header.module.scss"

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo__container}>
                <img src={logo} alt="Logo da Frida's Dog" />
                <h2 className={styles.logo__container__title}>Frida's Dog</h2>
            </div>
            <div className={styles.header__container}>
                <input className={styles.header__input} type="text" placeholder="O que você procura?" />
                <img src={search} alt="ícone de lupa" />
            </div>
        </header>
    )
}