import Header from "./Header"
import CardPizza from "./CardPizza"
import { pizzas } from "./Pizzas"

const Home = () => {
  return(
    <>
      <Header/>
      <main className="row d-flex justify-content-center gap-4 mx-0 py-5">
        {pizzas.map((pizza) => (
          <CardPizza
            key={pizza.id}
            name={pizza.name}
            img={pizza.img}
            desc={pizza.desc}
            ingredients={pizza.ingredients}
            price={pizza.price}
          />
        ))}
      </main>
    </>
  )
}

export default Home