import Hero from './components/hero'

function Main() {
  return (
    <>
      <main>
        <Hero />

        <section>
          <div>
            <div>
              <h2>This week specials</h2>
              <button>Online Menu</button>
            </div>

            <div>
              <div>
                <img src="" alt=""/>

                <div>
                  <div>
                    <p>Greek salad</p>
                    <p>$12.99</p>
                  </div>
                  
                  <p>
                    The famous greek salad of crispy lettuce, peppers, olives and our 
                    Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. 
                  </p>

                  <div>
                    <p>Order a delivery</p>
                    <img src="" alt=""/>
                  </div>
                </div>
              </div>

              <div>
                <img src="" alt=""/>

                <div>
                  <div>
                    <p>Bruchetta</p>
                    <p>$ 5.99</p>
                  </div>
                  
                  <p>
                    Our Bruschetta is made from grilled bread that has been smeared with garlic and 
                    seasoned with salt and olive oil.  
                  </p>

                  <div>
                    <p>Order a delivery</p>
                    <img src="" alt=""/>
                  </div>
                </div>
              </div>

              <div>
                <img src="" alt=""/>

                <div>
                  <div>
                    <p>Lemon Dessert</p>
                    <p>$ 5.00</p>
                  </div>
                  
                  <p>
                    This comes straight from grandma’s recipe book, every last ingredient has been 
                    sourced and is as authentic as can be imagined.
                  </p>

                  <div>
                    <p>Order a delivery</p>
                    <img src="" alt=""/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2>This week specials</h2>

          <div>
            <div>
              <p>Order a delivery</p>
              
              <div>
                <img src="" alt=""/>
                <p>Order a delivery</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Main;
