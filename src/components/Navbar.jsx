import "../css/Navbar.css"
import CartWidget from "./CartWidget"
import { NavLink } from "react-router-dom"


const Navbar = () => {
    return(
        <nav className="cont-nav">
            <NavLink to='/'>
                <img src="../logo-garritas.png" alt="logo" style={{width:'9rem'}}/>
            </NavLink>
        <div className="cont-a">
            <NavLink to="/category/ropa">Ropa</NavLink>
            <NavLink to="/category/juguetes">Juguetes</NavLink>
            <NavLink to="/category/camas">Camas</NavLink>
        </div>
        <NavLink to='/cart'>
            <CartWidget/>
        </NavLink>
        </nav>
    )
}
export default Navbar