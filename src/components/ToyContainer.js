import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys }) {
  const toyCards = toys.map((toyObj) => {
    return <ToyCard key={toyObj.id} toy={toyObj}></ToyCard>;
  });

  return <div id="toy-collection">{toyCards}</div>;
}

export default ToyContainer;
