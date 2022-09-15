import hamburguerImg from "../../img/cardsImg/hamburger.png";
import x_burguer from "../../img/cardsImg/x-burguer.png";
import { ContainerHome } from "../ContainerHome";
import { LiStyled } from "./styled";

export function Cards({ food, setCartFood, cartFood, inputValue, filterCard }) {

  if (inputValue.length !== 0) {
  }
  return (
    <>
      {filterCard.length > 0 ? (
        <ul className="cardsList_UL">
          {filterCard.map((elem) => (
            <ContainerHome
              key={elem.id}
              elem={elem}
              cartFood={cartFood}
              setCartFood={setCartFood}
            />
          ))}
        </ul>
      ) : (
        food.length > 0 && (
          <ul className="cardsList_UL">
            {food.map((elem) => (
              <ContainerHome
                key={elem.id}
                elem={elem}
                cartFood={cartFood}
                setCartFood={setCartFood}
              />
            ))}
          </ul>
        )
      )}
    </>
  );
}

{
  /* {
  
} */
}
