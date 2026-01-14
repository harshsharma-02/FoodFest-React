import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Services from './components/Services'
import FoodCatalogue from './components/FoodCatalogue'
import Clients from './components/Clients'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <Services />
        <FoodCatalogue />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
