import './index.css';
import RestaurantFood from '../../assets/images/restauranfood.jpg'

function Hero() {
    return (
      <>
        <section className="section-hero">
            <div className="container">
                <div className="section-hero-content">
                    <h1 className="display-title">Little Lemon</h1>
                    <h3 className="sub-title">Chicago</h3>
                    <p className="lead-text">
                        We are a family owned Mediterranean restaurant, focused on traditional 
                        recipes served with a modern twist.
                    </p>
                    <button className="card-title">Reserve a Table</button>
                </div>

                <img src={RestaurantFood} alt="Restaurant Food" className="section-hero-image"/>
            </div>
        </section>
      </>
    )
  }
  
  export default Hero;
  