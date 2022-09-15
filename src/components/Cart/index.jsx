import { useEffect, useState } from "react";
import { DivStyled } from "./styled";

export function Cart({cartFood,setCartFood}) {

  const [filtro,setFiltro] = useState([]);
  const totalMoney = filtro.reduce((a,b) => a + b.price ,0);

  function removeItens() {

    setCartFood([]);

  }

  function remove(indiceItem) {

    const itemFIlter = cartFood.splice(indiceItem,1);
    const array = [];
    for(let i = 0; i < cartFood.length; i++) {

      if(cartFood[1] !== itemFIlter) {

        array.push(cartFood[i]);

      }

    }

    setCartFood(array);

  }

  function filterElementReplace() {

    const arrayFilter = [];
    cartFood.forEach(element => {
      if(!arrayFilter.includes(element)) {

        arrayFilter.push(element);
      }
    });
    console.log(arrayFilter);
    setFiltro(arrayFilter);

  }
  useEffect(()=> filterElementReplace(), [cartFood])
  
  

  return (
    <>
      {filtro.length > 0 ? (
        <DivStyled>
          <div className="containerGreen">
            <h3 className="h3ContainerGreen">Carrinho de compras</h3>
          </div>
          <ul className="CartList_UL">
            {filtro?.map((elem, index) => (
              <li key={index}>
                <div className="imgCart">
                  <img src={elem.img} alt={elem.name} />
                </div>
                <div className="containerInfoCart">
                  <header>
                    <h3 className="nameItemCart">{elem.name}</h3>
                    <button className="btnRemoveIten" onClick={()=> remove(index) }>Remover</button>
                  </header>
                  <p>{elem.type}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="price">
            <div className="line"></div>
            <label htmlFor="" className="label">
              <p className="textTotal">Total</p>
              <span className="valuePrice">R$ {Math.round (totalMoney * 100) / 100}</span>
            </label>
            <button className="btnShop" onClick={removeItens}>Remover todos</button>
          </div>
        </DivStyled>
      ) : (
        <DivStyled>
          <div className="containerGreen">
            <h3 className="h3ContainerGreen">Carrinho de compras</h3>
          </div>

          <ul className="CartList_Vazio">
            <h3>Sua sacola está vazia</h3>
            <p>Adicione itens</p>
          </ul>
        </DivStyled>
      )}
    </>
  );
}
