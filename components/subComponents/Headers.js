import React from "react";
import { style_Headers } from "./styles";
//require("svg-url-loader!../../resources/data/pokemonData");
//import pokeSvg from "../../resources/data/pokemonData";
require("../../resources/styles.css")
const { _p, /*_pokeSvg*/ } = style_Headers;

export default ({ mainText, subText }) => (
  <>
    <div style={{ display: "flex" }}>
      <div className="rotating" alt="pokeball logo"/>
      <h1 style={{ fontSize: "35px" }}>{mainText}</h1>
    </div>
    <p style={_p}>{subText}</p>
  </>
);
