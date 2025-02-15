import Header from "./Header"
import CardPizza from "./CardPizza"
import { pizzas } from "./Pizzas"

const Home = () => {
  return(
    <>
      <Header/>
      <main>
        {pizzas.map((pizza) => (
          <CardPizza
            key={pizza.id}
            name={pizza.name}
            img={pizza.img}
            desc={pizza.desc}
            ingredients={pizza.ingredients} //aca se modifico sancando .join('. ') y dejandolos igual que los otros.
            price={pizza.price}
          />
        ))}
      </main>
    </>
  )
}

export default Home