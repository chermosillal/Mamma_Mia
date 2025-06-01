import "../assets/css/card.css";

const CardPizza = (props) => {
  return (
      <div class="card">
          <img class="foto" src={props.img} alt={props.name} />
          <div class="nombre"><h2 >Pizza {props.name} <i class="fas fa-pizza-slice"></i></h2></div>
          <div class="linea"></div>
          <p class="tituloIngredientes">Ingredientes:</p>
          <p class="ingredientes">🍕 {props.ingredients.join(", ")}
</p>
          <div class="linea"></div>
          <p class="precio">Precio: $ {formatoMiles(props.price)}</p>
          <div className="botones">
            <button class="btnVermas"><i class="fas fa-eye"></i> Ver más</button>
            <button class="btnAdd"><i class="fas fa-shopping-cart"></i> Añadir</button>
          </div>
      </div>
  )
}

export default CardPizza

function formatoMiles(numero) {
    return numero.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}