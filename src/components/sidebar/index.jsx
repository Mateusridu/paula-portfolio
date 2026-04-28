import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'


const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt="logo" />
            <img className="sub-logo" src={LogoSubtitle} alt="paula damasco" />
        </Link>
        <nav>
            <NavLink className="home-link" to="/" end>
                Home
            </NavLink>
            <NavLink className="about-link" to="/about">
                Sobre
            </NavLink>
            <NavLink className="treatments-link" to="/treatments">
                Tratamentos
            </NavLink>
            <NavLink className="contact-link" to="/contact">
                Localização
            </NavLink>
        </nav>    
    </div>
)

export default Sidebar;