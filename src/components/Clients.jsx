import './Clients.css'
import client1 from '../assets/img/Client1.png'
import client2 from '../assets/img/Client2.png'
import client3 from '../assets/img/Client3.png'
import client4 from '../assets/img/Client4.png'

function Clients() {
  return (
    <section id="client-section">
      <h1 className="h-primary center">Our Clients</h1>
      <div id="clients">
        <div className="client-item">
          <img src={client2} alt="Client 2" />
        </div>
        <div className="client-item">
          <img src={client1} alt="Client 1" />
        </div>
        <div className="client-item">
          <img src={client3} alt="Client 3" />
        </div>
        <div className="client-item">
          <img src={client4} alt="Client 4" />
        </div>
      </div>
    </section>
  )
}

export default Clients

