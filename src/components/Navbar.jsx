import './Navbar.css'
import DarkModeToggle from './DarkModeToggle'
import logo from '../assets/img/Logo.png'

function Navbar() {
  return (
    <nav id="navbar">
      <div id="logo" >      
        <img src={logo} alt="FoodFest.com" />
      </div>
      <ul>
        <li className="item"><a href="#home">Home</a></li>
        <li className="item"><a href="#services-container">Services</a></li>
        <li className="item"><a href="#food-catalogue">Menu</a></li>
        <li className="item"><a href="#client-section">Our Clients</a></li>
        <li className="item"><a href="#contact">Contact Us</a></li>
      </ul>
      <DarkModeToggle />
    </nav>
  )
}

export default Navbar

