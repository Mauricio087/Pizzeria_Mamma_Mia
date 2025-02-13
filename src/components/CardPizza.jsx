import "./Card.css"

const CardPizza = ({ name, price, ingredients, img, desc }) => {
  return (
    <div className="pizza">
      <div className="card">
        <img className="border rounded" src={img} alt={name} />
        <h2 className="text-start fs-3 m-2">{name}</h2>
        <p>{desc}</p>
        <hr />
        <p>Ingredientes: <br />🍕{ingredients}</p>
        <hr />
        <p className="price fs-4 fw-bold">Precio: ${price.toLocaleString("es-CL")}</p>
        <div className="buttons">
          <button className="bg-light border rounded border-dark">Ver más 👀</button>
          <button className="bg-dark text-white border rounded">Añadir 🛒</button>
        </div>
      </div>
    </div>
  );
};


export default CardPizza