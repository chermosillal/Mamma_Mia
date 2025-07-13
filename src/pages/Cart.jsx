import React from "react";
import "../assets/css/cart.css";
import { useCart } from "../context/CartContext"; // ✅ Accedemos al carrito
import { useUser } from "../context/UserContext"; // 👈 Accedemos al token simulado

const Cart = () => {
  const { cartItems, increment, reduce, total } = useCart();
  const { token } = useUser(); // 👈 Estado de sesión

  return (
    <div className="marco">
      <div className="cart">
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
                    <td><button onClick={() => reduce(id)}>-</button></td>
                    <td className="cant">{count}</td>
                    <td><button onClick={() => increment(id)}>+</button></td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="total-container">
              <p className="suma">
                Total: {total.toLocaleString("es-CL", {
                  style: "currency",
                  currency: "CLP"
                })}
              </p>
            </div>

            {/* 👇 Botón "Pagar" condicionado al token */}
            <button className="pay-button" disabled={!token}>
              Pagar
            </button>

            {!token && (
              <p className="alerta-token">
                🔐 Debes iniciar sesión para realizar el pago.
              </p>
            )}
          </>
        ) : (
          <p>El carrito está vacío.</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
