import { LiStyled } from "../Cards/styled";

export function ContainerHome({ elem, cartFood, setCartFood }) {
  function createCart() {
    
    setCartFood([...cartFood, elem]);
    
    /* const arrayFilter = [];
    arrayFilter.push(elem);
    console.log(arrayFilter)
    if(!arrayFilter.includes(elem)) {


    } */
    /*if (cartFood.length > 0) {
      cartFood.forEach((element) => {
        if (!arrayFilter.includes(element)) {
          arrayFilter.push(element);
          console.log(arrayFilter)
        }
      });
    }
    //setCartFood(arrayFilter);  */

  }

  return (
    <LiStyled>
      <div className="containerImg">
        <img src={elem.img} alt={elem.name} />
      </div>

      <div className="containerInfoCards">
        <label htmlFor="">
          <h3>{elem.name}</h3>
          <p>{elem.category}</p>
          <span>R$ {elem.price}</span>
        </label>
        <button onClick={createCart}>Adicionar</button>
      </div>
    </LiStyled>
  );
}
