import React, { useState } from "react";
import { pizzas, pizzaCart } from "../data/pizzas";
import "../assets/css/cart.css";

const Cart = () => {
  // Filtrar los elementos de pizzas que están en pizzaCart y asignar cantidad inicial de 1
  const initialCart = pizzaCart.map(cartItem => ({
    ...pizzas.find(pizza => pizza.id === cartItem.id),
    count: 1, // Iniciar con cantidad 1
  }));

  const [cartItems, setCartItems] = useState(initialCart);

  // Función para incrementar cantidad
  const handleIncrease = (id) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, count: item.count + 1 } : item
    ));
  };

  // Función para disminuir cantidad y eliminar si llega a 0
  const handleDecrease = (id) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, count: item.count - 1 } : item
    ).filter(item => item.count > 0)); // Filtramos para eliminar si llega a 0
  };

  return (
    <div className="marco">
      <div className="card">
        <h2><i className="fas fa-shopping-cart"></i> Detalles del pedido</h2>
        {cartItems.length > 0 ? (
        <>
          <table className="cart-table">
            <tbody>
              {cartItems.map(({ id, name, price, img, count }) => (
              <tr key={id}>
                <td><img className="foto2" src={img} alt={name} /></td>
                <td>{name.toUpperCase()}</td>
                <td>${price.toLocaleString("es-CL")}</td>
                <td><button onClick={() => handleDecrease(id)}>-</button></td>
                <td className="cant">{count}</td>
                <td><button onClick={() => handleIncrease(id)}>+</button></td>
              </tr>
              ))}
            </tbody>
          </table>

          {/* Totalización fuera de la tabla */}
          <div className="total-container">
            {/* <p><strong>Total cantidad:</strong> {cartItems.reduce((acc, item) => acc + item.count, 0)}</p> */}
            <p className="suma">
              Total: {cartItems.reduce((acc, item) => acc + item.price * item.count, 0)
                .toLocaleString("es-CL", { style: "currency", currency: "CLP" })}
            </p>
          </div>

          {/* Botón pagar */}
          <button className="pay-button">Pagar</button>
        </>
          ) : (
          <p>El carrito está vacío.</p>
          )}
      </div>
    </div>
      );
    };

export default Cart;
