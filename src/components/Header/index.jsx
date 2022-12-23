import logo from "./logo.png"
import search from "./search.png"

export default function Header() {
    return (
        <header>
            <img src={logo} alt="Logo da Frida's Dog" />
            <div>
                <input type="text" placeholder="O que você procura?" />
                <img src={search} alt="ícone de lupa" />
            </div>
        </header>
    )
}