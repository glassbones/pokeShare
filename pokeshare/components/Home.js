import React, { useState } from "react";
import { Container, Headers, ShareButtons } from "./subComponents";
import ReactSearchBox from "react-search-box";
import pokemon from "../public/data/pokemonData";


export default () => {
  const [shareURL, setShareUrl] = useState("");
  const onSelect = (selection) => {
    setShareUrl(
      `${
        window.document.location.href
      }referred/${selection.value.toLowerCase()}`
    );
    console.log(shareURL);
  };
  return (
    <Container
      contents={
        <>
          <Headers
            mainText={"PokeShare"}
            subText={"Search for a Pokemon then click to share"}
          />

          <ReactSearchBox
            placeholder="Search"
            data={pokemon}
            onSelect={onSelect}
          />
          {shareURL ? <ShareButtons url={shareURL} /> : <></>}
        </>
      }
    />
  );
};
