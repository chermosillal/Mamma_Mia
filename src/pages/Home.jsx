import { useEffect, useState } from "react";
import CardPizza from "../components/CardPizza"
import Header from "../components/Header"
import "../assets/css/home.css";
import { pizzas } from "../data/pizzas";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/pizzas")
      .then((response) => response.json())
      .then((data) => setPizzas(data))
      .catch((error) => console.error("Error al obtener pizzas:", error));
  }, []);

  return (
    <>
      <Header />
      <div className="marco">
        {pizzas.length > 0 ? (
          pizzas.map((pizza) => (
            <CardPizza 
              key={pizza.id}
              img={pizza.img}
              name={pizza.name} 
              price={pizza.price} 
              ingredients={pizza.ingredients} 
            />
          ))
        ) : (
          <p>Cargando pizzas...</p>
        )}
      </div>
    </>
  );
};

export default Home;



