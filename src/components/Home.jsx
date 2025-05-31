import CardPizza from "./CardPizza"
import Header from "./Header"

const Home = () => {
  return (
  <>
    <Header/>
    {/* <CardPizza img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"/> */}
    <CardPizza img="src/assets/img/napolitana.jpg" name="lala" ingredients="lalalaala" price="222"/>

    {/* <CardPizza img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab"/> */}
    <CardPizza img="src/assets/img/espanola.jpg" name="lala" ingredients="lalalaala" price="222"/>

    {/* <CardPizza img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3"/> */}
    <CardPizza img="src/assets/img/peperoni.jpg" name="lala" ingredients="lalalaala" price="222"/>
  </>
  )
}

export default Home