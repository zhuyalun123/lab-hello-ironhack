import logo from './ironhack-logo.svg';
import logoMenu from './menu-top.svg';
import header from "./header.css"

const Header = () => {

    return (
        
        <header className="header" >

            <img src={logo} alt="Logotipo" style={{ width: '5%' }} />
            <img src={logoMenu} alt="logoMenu" style={{ width: '5%' }} className="logoMenu"/>


        </header>
    )
}

export default Header