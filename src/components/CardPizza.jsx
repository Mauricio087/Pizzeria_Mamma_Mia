
const CardPizza = ({ name, price, ingredients, img, desc }) => {
  return (
    <div className="col-12 col-sm-6 col-md-3 d-flex justify-content-center">
      <div className="card ">
        <img className="card-img-top" src={img} alt={name} />
        <h2 className="text-start fs-3 m-2 text-center">{name}</h2>
        <p className='text-center px-3'>{desc}</p>
        <hr />
        <ul className='ingredients list-unstyled text-muted text-center'>Ingredientes: 🍕
          {ingredients.map((ingredients) =>(
            <li key={ingredients}>{ingredients}
            </li>
          ))}
        </ul>
        <hr />
        <p className="price fs-4 fw-bold text-center">Precio: ${price.toLocaleString("es-CL")}</p>
        <div className="buttons d-flex justify-content-between px-2 pb-2">
          <button className="bg-light border rounded border-dark">Ver más 👀</button>
          <button className="bg-dark text-white border rounded">Añadir 🛒</button>
        </div>
      </div>
    </div>
  );
};


export default CardPizza