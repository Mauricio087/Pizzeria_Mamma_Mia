import Header from "../components/Header"
import CardPizza from "../components/CardPizza"
import { useState, useEffect } from "react"
//import { pizzas } from "./Pizzas"

const Home = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/pizzas");
        const data = await response.json();
        setPizzas(data);
      } catch (error) {
        console.error("Error al obtener las pizzas:", error);
      }
    };

    fetchPizzas();
  }, []);
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