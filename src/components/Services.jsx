import './Services.css'
import foodOrderingImg from '../assets/img/pexels-valeria-boltneva-1199957.jpg'
import dineInImg from '../assets/img/pexels-creative-vix-370984.jpg'
import takeAwayImg from '../assets/img/pexels-pixabay-461198.jpg'

function Services() {
  return (
    <section id="services-container">
      <h1 className="h-primary center">Our Services</h1>
      <div id="services">
        <div className="box">
          <img src={foodOrderingImg} alt="Food Ordering" />
          <h2 className="h-secondary center">Food Ordering</h2>
          <p className="center">
            Experience the convenience of online food ordering with our seamless digital platform.
            Browse our extensive menu of authentic Indian dishes, customize your orders, and track
            your delivery in real-time. We partner with leading delivery services to ensure your
            food arrives fresh and hot at your doorstep.
          </p>
        </div>

        <div className="box">
          <img src={dineInImg} alt="Dine-In" />
          <h2 className="h-secondary center">Dine-In</h2>
          <p className="center">
            Immerse yourself in the authentic Indian dining experience at our beautifully designed restaurant.
            Our elegant ambiance features traditional Indian decor with modern comforts, creating the perfect
            setting for family gatherings, romantic dinners, or business meetings. Enjoy our signature dishes
            prepared fresh by our expert chefs using traditional recipes and premium ingredients.
          </p>
        </div>

        <div className="box">
          <img src={takeAwayImg} alt="Take-Away" />
          <h2 className="h-secondary center">Take-Away</h2>
          <p className="center">
            Quick and convenient takeaway service for those on the go! Call ahead or order at our counter
            for freshly prepared meals packed with care. Our efficient takeaway system ensures minimal
            waiting time while maintaining the quality and freshness of our dishes.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Services

