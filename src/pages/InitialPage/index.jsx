import Header from "../../components/Header";
import Menu from "../../components/Menu";
import style from "./InitialPage.module.scss"
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Gallery from "../../components/Gallery";

export default function InitialPage() {
    return (
        <>    
            <Header />
            <section className={style.main__section}>
                <Menu />    
                <Banner />
            </section>
            <div>
                <Gallery />
            </div>
            <Footer />
        </>
    )
}