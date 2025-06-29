import { useEffect, useState } from "react";
// import CardPizza from "./CardPizza"
import Header from "../components/Header"
import "../assets/css/home.css";
import CardPizzaUnica from "../components/CardPizzaUnica";
// import { pizzas } from "../data/pizzas";

const Pizza = () => {
  const [pizza, setPizza] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5000/api/pizzas/p001")
      .then((response) => response.json())
      .then((data) => setPizza(data))  // Ahora `data` es un solo objeto
  }, []);

return (
    <>
      <Header />
      <div className="marco">
        {pizza ? (
          <CardPizzaUnica
            key={pizza.id}
            img={pizza.img}
            name={pizza.name} 
            price={pizza.price} 
            ingredients={pizza.ingredients}
            desc={pizza.desc} 
          />
        ) : (
          <p>Cargando pizza...</p>
        )}
      </div>
    </>
  );
};

export default Pizza;



