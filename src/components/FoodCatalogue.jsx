import './FoodCatalogue.css'

function FoodCatalogue() {
  return (
    <section id="food-catalogue">
      <h1 className="h-primary center">Menu</h1>
      <div className="catalogue-container">
        {/* Appetizers */}
        <div className="food-category">
          <h2 className="category-title">Appetizers</h2>
          <div className="food-grid">
            <div className="food-item">
              <img
                src="https://images.unsplash.com/photo-1572695157360-1153aaad020b?w=500&auto=format&fit=crop&q=60"
                alt="Bruschetta"
              />
              <div className="food-info">
                <h3>Bruschetta</h3>
                <p>Toasted bread topped with tomatoes, garlic, and fresh basil</p>
                <span className="price">₹299</span>
              </div>
            </div>

            <div className="food-item">
              <img
                src="https://images.unsplash.com/photo-1679279726940-be5ce80c632c?w=500&auto=format&fit=crop&q=60"
                alt="Mozzarella Sticks"
              />
              <div className="food-info">
                <h3>Mozzarella Sticks</h3>
                <p>Crispy breaded plant-based mozzarella served with marinara sauce</p>
                <span className="price">₹249</span>
              </div>
            </div>

            <div className="food-item">
              <img
                src="https://images.unsplash.com/photo-1703219339970-98cd69cc896f?w=500&auto=format&fit=crop&q=60"
                alt="Spinach Dip"
              />
              <div className="food-info">
                <h3>Spinach Dip</h3>
                <p>Creamy cashew-based dip with spinach, artichokes, and nutritional yeast</p>
                <span className="price">₹349</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Course */}
        <div className="food-category">
          <h2 className="category-title">Main Course</h2>
          <div className="food-grid">
            <div className="food-item">
              <img
                src="https://plus.unsplash.com/premium_photo-1694850980331-fd0dd7f6617b?w=500&auto=format&fit=crop&q=60"
                alt="Grilled Portobello Steak"
              />
              <div className="food-info">
                <h3>Grilled Portobello Steak</h3>
                <p>Marinated portobello mushrooms with lemon herb sauce and seasonal vegetables</p>
                <span className="price">₹599</span>
              </div>
            </div>

            <div className="food-item">
              <img
                src="https://images.unsplash.com/photo-1585285072892-a52481577926?w=500&auto=format&fit=crop&q=60"
                alt="Tenderloin"
              />
              <div className="food-info">
                <h3>Tenderloin</h3>
                <p>Plant-based seitan with red wine reduction and garlic mashed potatoes</p>
                <span className="price">₹799</span>
              </div>
            </div>

            <div className="food-item">
              <img
                src="https://plus.unsplash.com/premium_photo-1671377377502-37bf7369f92d?w=500&auto=format&fit=crop&q=60"
                alt="Marsala"
              />
              <div className="food-info">
                <h3>Marsala</h3>
                <p>Plant-based chicken in marsala wine sauce with mushrooms</p>
                <span className="price">₹549</span>
              </div>
            </div>

            <div className="food-item">
              <img
                src="https://images.unsplash.com/photo-1579631542720-3a87824fff86?w=500&auto=format&fit=crop&q=60"
                alt="Pasta Carbonara"
              />
              <div className="food-info">
                <h3>Pasta Carbonara</h3>
                <p>Spaghetti with cashew cream, tempeh bacon, and black pepper</p>
                <span className="price">₹449</span>
              </div>
            </div>
          </div>
        </div>

        {/* Plant-Based Specialties */}
        <div className="food-category">
          <h2 className="category-title">🥬 Plant-Based Specialties</h2>
          <div className="food-grid">
            <div className="food-item">
              <img
                src="https://plus.unsplash.com/premium_photo-1723032016322-6ac8616b2f39?w=500&auto=format&fit=crop&q=60"
                alt="Vegetable Stir Fry"
              />
              <div className="food-info">
                <h3>Vegetable Stir Fry</h3>
                <p>Fresh seasonal vegetables in light soy sauce with brown rice</p>
                <span className="price">₹499</span>
              </div>
            </div>

            <div className="food-item">
              <img
                src="https://plus.unsplash.com/premium_photo-1695240028448-9a8bf3e164f5?w=500&auto=format&fit=crop&q=60"
                alt="Mushroom Risotto"
              />
              <div className="food-info">
                <h3>Mushroom Risotto</h3>
                <p>Creamy risotto with wild mushrooms and cashew parmesan</p>
                <span className="price">₹549</span>
              </div>
            </div>

            <div className="food-item">
              <img
                src="https://images.unsplash.com/photo-1634582872934-be411573f235?w=500&auto=format&fit=crop&q=60"
                alt="Quinoa Buddha Bowl"
              />
              <div className="food-info">
                <h3>Quinoa Buddha Bowl</h3>
                <p>Nutritious quinoa with roasted vegetables and tahini dressing</p>
                <span className="price">₹449</span>
              </div>
            </div>
          </div>
        </div>

        {/* Desserts */}
        <div className="food-category">
          <h2 className="category-title">🍰 Desserts</h2>
          <div className="food-grid">
            <div className="food-item">
              <img
                src="https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500&auto=format&fit=crop&q=60"
                alt="Tiramisu"
              />
              <div className="food-info">
                <h3>Tiramisu</h3>
                <p>Classic Italian dessert with coffee-soaked ladyfingers and cashew mascarpone</p>
                <span className="price">₹299</span>
              </div>
            </div>

            <div className="food-item">
              <img
                src="https://images.unsplash.com/photo-1626197031507-c17099753214?w=500&auto=format&fit=crop&q=60"
                alt="Chocolate Lava Cake"
              />
              <div className="food-info">
                <h3>Chocolate Lava Cake</h3>
                <p>Warm chocolate cake with molten center and coconut vanilla ice cream</p>
                <span className="price">₹349</span>
              </div>
            </div>

            <div className="food-item">
              <img
                src="https://images.unsplash.com/photo-1567171466295-4afa63d45416?w=500&auto=format&fit=crop&q=60"
                alt="New York Cheesecake"
              />
              <div className="food-info">
                <h3>New York Cheesecake</h3>
                <p>Creamy cashew-based cheesecake with berry compote and coconut whipped cream</p>
                <span className="price">₹249</span>
              </div>
            </div>
          </div>
        </div>

        {/* Beverages */}
        <div className="food-category">
          <h2 className="category-title">Beverages</h2>
          <div className="food-grid">
            <div className="food-item">
              <img
                src="https://images.unsplash.com/photo-1600718374662-0483d2b9da44?w=500&auto=format&fit=crop&q=60"
                alt="Fruit Smoothie"
              />
              <div className="food-info">
                <h3>Fruit Smoothie</h3>
                <p>Blend of seasonal fruits with coconut yogurt and agave nectar</p>
                <span className="price">₹199</span>
              </div>
            </div>

            <div className="food-item">
              <img
                src="https://images.unsplash.com/photo-1527156231393-7023794f363c?w=500&auto=format&fit=crop&q=60"
                alt="Iced Latte"
              />
              <div className="food-info">
                <h3>Iced Latte</h3>
                <p>Espresso with oat milk and a touch of vanilla</p>
                <span className="price">₹149</span>
              </div>
            </div>

            <div className="food-item">
              <img
                src="https://images.unsplash.com/photo-1640766102262-b9ec5414a758?w=500&auto=format&fit=crop&q=60"
                alt="Fresh Lemonade"
              />
              <div className="food-info">
                <h3>Fresh Lemonade</h3>
                <p>Homemade lemonade with fresh mint and agave nectar</p>
                <span className="price">₹99</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FoodCatalogue

