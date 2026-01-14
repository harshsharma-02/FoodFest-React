import './Navbar.css'
import DarkModeToggle from './DarkModeToggle'
import logo from '../assets/img/Logo.png'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav id="navbar">
      <Link to="/#home" id="logo">
        <img src={logo} alt="FoodFest.com" />
      </Link>
      <ul>
        <li className="item"><Link to="/#home">Home</Link></li>
        <li className="item"><Link to="/#services-container">Services</Link></li>
        <li className="item"><Link to="/#food-catalogue">Menu</Link></li>
        <li className="item"><Link to="/#client-section">Our Clients</Link></li>
        <li className="item"><Link to="/#contact">Contact Us</Link></li>
      </ul>
      <DarkModeToggle />
    </nav>
  )
}

export default Navbar

