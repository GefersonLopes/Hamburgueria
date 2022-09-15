import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Cards } from "./components/Cards";
import { Cart } from "./components/Cart";

import "./App.css";

function App() {
  
  const [food, setfood] = useState([]);
  const [cartFood, setCartFood] = useState([]);
  const [filterCard,setFilterCard] = useState([]);

  const [inputValue, setInputValue] = useState("");
  const url = "https://hamburgueria-kenzie-json-serve.herokuapp.com/products";

  useEffect(() => {
    fetch(url)
      .then((obj) => obj.json())
      .then((res) => setfood(res))
      .catch((err) => console.log("erro no fetch " + err));
  }, []);

  function filterInput() {
    
    let array = [];
    array = food.filter((elem) => {
      if (elem.name.toLowerCase() == inputValue.toLowerCase() || elem.category.toLowerCase() == inputValue.toLowerCase()) {
        console.log(elem);
        return elem;
      }
    });
    setFilterCard(array);
  
  }

  return (
    <>
      <Header
        inputValue={inputValue}
        setInputValue={setInputValue}
        filterInput={filterInput}
      />

      <main>
        <section>
          <Cards food={food} cartFood={cartFood} setCartFood={setCartFood} inputValue={inputValue} filterCard={filterCard} />
        </section>

        <div className="container_Cart">
          <Cart cartFood={cartFood} setCartFood={setCartFood} />
        </div>
      </main>
    </>
  );
}

export default App;
