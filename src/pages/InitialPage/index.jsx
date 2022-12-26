import banner from "./banner.png"
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import styles from "./InitialPage.module.scss"

export default function InitialPage() {
    return (
        <>    
            <Header />
            <main>
                <section className={styles.main__section}>
                    <Menu />    
                    <div className={styles.main__section__image}>
                        <h1>O melhor dog da cidade!</h1>
                        <img src={banner} alt="Banner da marca frida's dog" />
                    </div>
                </section>
            </main>
        </>
    )
}