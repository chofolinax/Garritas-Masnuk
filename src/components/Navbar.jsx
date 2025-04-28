import "../css/Navbar.css"
import CartWidget from "./CartWidget"


const Navbar = () => {
    return(
        <nav className="cont-nav">
        <img src="../logo-garritas.png" alt="logo" style={{width:'9rem'}}/>
        <div className="cont-a">
            <a href="">Ropa</a>
            <a href="">Juguetes</a>
            <a href="">Camas</a>
        </div>
        <CartWidget/>
        </nav>
    )
}
export default Navbar