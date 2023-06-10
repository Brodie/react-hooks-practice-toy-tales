import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, onDelete, onLike }) {
  const toyCards = toys.map((toyObj) => {
    return (
      <ToyCard
        key={toyObj.id}
        toy={toyObj}
        onDelete={onDelete}
        onLike={onLike}
      ></ToyCard>
    );
  });

  return <div id="toy-collection">{toyCards}</div>;
}

export default ToyContainer;
