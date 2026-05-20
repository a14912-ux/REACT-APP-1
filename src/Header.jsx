import "./Header.css"
import heroImg from "./assets/hero.png"

function Header() {
    return(
        <div>
            <logo><img src={heroImg} alt="Hero Vite" /></logo>
                <nav>
                    <a href="/home">Home</a>
                    <a href="/contactos">Contactos</a>
                </nav> 
                <div classname="clear"></div>
        </div>
    )

}

export default Header