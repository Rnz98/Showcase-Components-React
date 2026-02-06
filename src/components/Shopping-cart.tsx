import { useCart } from "../logic/cart";
import "../styles/Shopping-cart.css";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const ShoppingCart = () => {
  const { theme, toggleTheme } = useTheme();
  const { products, cart, cartItems, increase, decrease, total } = useCart();

  return (
    <div className="sectionshoopingCart">
      <div className="shoopingCart">
        <div className="shoopingCart-container">
          <div className="shoopingCart-header">
            <div className="header-top">
              <h2>Shopping Cart</h2>
              <div className="header-actions">
                <button className="theme-toggle" onClick={toggleTheme}>
                  {theme === "light" ? "🌙" : "☀️"}
                </button>
                <Link to="/" className="back-button">← Back</Link>
              </div>
            </div>
            <p>
              Componente encargado de gestionar y visualizar el proceso de
              compra del usuario. Muestra una lista de productos disponibles,
              permite seleccionar la cantidad de cada producto, y refleja en
              tiempo real los ítems añadidos al carrito, su precio individual y
              el total acumulado. Incluye un botón para confirmar y enviar la
              orden.
            </p>
          </div>

          <div className="shoopingCart-demo">
            <div className="shoopingCart-content">
              <div className="list-products">
                <h2>List of Products</h2>
                <div className="products">
                  {products.map((product) => {
                    const cantidad = cart[product.id] || 0;

                    return (
                      <div
                        key={product.id}
                        className={`productCard ${
                          cantidad > 0 ? "active-border" : ""
                        }`}
                      >
                        <div className="productCategory">
                          {product.category}
                        </div>
                        <img
                          src={product.image_url}
                          alt={product.name}
                          className="productImage"
                        />
                        <div className="productName">{product.name}</div>
                        <div className="productPrice">
                          ${product.price.toFixed(2)}
                        </div>
                        <div className="productAmount">
                          <button onClick={() => decrease(product.id)}>
                            -
                          </button>
                          <span>{cantidad}</span>
                          <button onClick={() => increase(product.id)}>
                            +
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="payment">
                <h2>Shopping Cart</h2>
                <div className="cantidad">
                  {cartItems.length === 0 ? (
                    <p>No products</p>
                  ) : (
                    cartItems.map((product) => (
                      <div className="precio-producto" key={product.id}>
                        <p>
                          {product.name} (${product.price} ×{" "}
                          {cart[product.id] || 0})
                        </p>
                        <p>
                          $
                          {(product.price * (cart[product.id] || 0)).toFixed(2)}
                        </p>
                      </div>
                    ))
                  )}
                </div>

                <div className="total">
                  <p>
                    <strong>Total</strong>
                  </p>
                  <p>
                    <strong>${total.toFixed(2)}</strong>
                  </p>
                </div>

                <button
                  className="buttonSubmit"
                  disabled={cartItems.length === 0}
                >
                  Submit Your Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
