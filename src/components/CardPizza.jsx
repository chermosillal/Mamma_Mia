const CardPizza = (props) => {
  return (
    <div >
        <img src={props.img} alt={props.name} />
        <h2 class="nombre">{props.name}</h2>
        <hr />
        <p class="titulo_ingredientes">Ingredientes:</p>
        <p class="titulo_ingredientes">{props.ingredients}</p>
        <hr />
        <p class="precio">{props.price}</p>
        <hr />
    </div>
  )
}

export default CardPizza