import Header from "../../components/Header";
import Menu from "../../components/Menu";
import style from "./InitialPage.module.scss"
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";

export default function InitialPage() {
    return (
        <>    
            <Header />
            <section className={style.main__section}>
                <Menu />    
                <Banner />
            </section>
            <Footer />
        </>
    )
}