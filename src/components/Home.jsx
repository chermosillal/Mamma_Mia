import CardPizza from "./CardPizza"
import Header from "./Header"
import "../assets/css/home.css";

const Home = () => {
  return (
      <>
      <Header/>
      <div class="productos">

        {/* <CardPizza img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"/> */}
        <CardPizza img="/img/napolitana.jpg" name="Napolitana" ingredients={["mozzarella", "tomates", "jamón", "orégano"]} price="5950"/>

        {/* <CardPizza img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab"/> */}
        <CardPizza img="/img/espanola.jpg" name="Española" ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]} price="6950"/>

        {/* <CardPizza img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3"/> */}
        <CardPizza img="/img/peperoni.jpg" name="Pepperoni" ingredients={["mozzarella", "pepperoni", "orégano"]} price="6950"/>
      </div>
      </>
  )
}

export default Home

