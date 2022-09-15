import { useState } from "react";
import logo from "../../img/logo.png";
import "./style.css";
import { HeaderStyled } from "./styled";

export function Header({inputValue,setInputValue,filterInput}) {

  return (
    <HeaderStyled className="header">
      <img src={logo} alt="logo" />
      <div>
        <input
          type="text"
          placeholder="Digitar pesquisa"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={filterInput} >Pesquisar</button>
      </div>
    </HeaderStyled>
  );
}
