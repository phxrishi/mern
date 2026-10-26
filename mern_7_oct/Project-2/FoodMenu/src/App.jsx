import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
function App() {
  return (
    <>
      <div className="row">
        <div className="col-sm-12">
          
            <div className="menu">
            <h1 className="heading">My Food Menu</h1>
            <div className="row">
              <h3 className="subhead">Pizza</h3>
              <div className="col-sm-1"></div>
              <div className="col-sm-4">
                <img src="./images.jpg" alt="" className="pizzaimg"/>
                <b className="pricetext"> ₹59 for Pizza Mania items</b>
              </div>
              <div className="col-sm-6">
                <div className="col-sm-1"></div>
                <p className="pizzatext">
                  Pizza is more than just food; it is a cultural phenomenon that has captured hearts across the world. Originating in Italy, pizza began as a simple flatbread topped with tomatoes, cheese, and herbs. Over time, it evolved into countless varieties, each reflecting the creativity and taste preferences of different regions. Today, pizza is enjoyed everywhere, from small street stalls to luxury restaurants, and even in homes where families prepare their own versions.

                    The magic of pizza lies in its versatility. The foundation is the crust, which can be thin and crispy, thick and fluffy, or even stuffed with cheese. The sauce, usually made from ripe tomatoes, adds tanginess and depth of flavor. Then comes the cheese — mozzarella being the classic choice, but many pizzas also feature cheddar, parmesan, or exotic blends. Finally, toppings transform pizza into a personalized dish. Some prefer the simplicity of Margherita, with just basil and mozzarella, while others love loaded versions with pepperoni, mushrooms, olives, onions, or even pineapple.
                </p>
              </div>
            </div>
                <hr />
            <div className="row">
              <h3 className="subhead">Burger</h3>
              <div className="col-sm-1"></div>
               <div className="col-sm-4">
                <img src="./burger.jpg" alt="" className="pizzaimg"/>
                <b className="pricetext"> ₹59 for Burger Mania items</b>
               </div>
                <div className="col-sm-6">
                  <p className="pizzatext">
                    The burger is one of the most iconic and beloved foods in the world. Simple in concept yet endlessly customizable, it has become a symbol of fast food culture, casual dining, and even gourmet innovation. At its core, a burger consists of a juicy patty placed between two soft buns, often accompanied by cheese, lettuce, tomato, onions, and sauces. But beyond this basic structure lies a universe of flavors, styles, and traditions that make the burger a truly global phenomenon.

The beauty of a burger lies in its versatility. The patty can be made from beef, chicken, lamb, fish, or even plant‑based alternatives like soy, lentils, or mushrooms. Each variation brings a unique taste and texture, catering to different dietary preferences. The buns, too, can range from classic sesame seed rolls to brioche, whole wheat, or even lettuce wraps for a healthier twist. Additions like crispy bacon, pickles, jalapeños, or fried eggs elevate the burger into a personalized masterpiece.
                  </p>
                </div>
                 <div className="col-sm-1"></div>
            </div>
         
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
