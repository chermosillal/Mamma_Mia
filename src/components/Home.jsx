import CardPizza from "./CardPizza"
import Header from "./Header"
import "../assets/css/home.css";
import { pizzas } from "../data/pizzas";

const Home = () => {
  return (
      <>
      <Header/>
      {pizzas.map((pizza, index) => (
        <CardPizza 
          // desc={pizza.desc}
          key={pizza.id}
          img={pizza.img}
          name={pizza.name} 
          price={pizza.price} 
          ingredients={pizza.ingredients} 
        />
      ))}
      </>
  )
}

export default Home

