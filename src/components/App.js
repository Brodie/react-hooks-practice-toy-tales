import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then((r) => r.json())
      .then((toys) => setToys(toys));
  }, []);

  function onLike(toyObj) {
    const newToys = toys.map((toy) => {
      if (toy.id === toyObj.id) {
        return toyObj;
      } else {
        return toy;
      }
    });
    setToys(newToys);
  }

  function onDelete(id) {
    const newToys = toys.filter((toy) => toy.id !== id);
    setToys(newToys);
  }

  function onSubmit(toy) {
    setToys([...toys, toy]);
  }

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onSubmit={onSubmit} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} onDelete={onDelete} onLike={onLike} />
    </>
  );
}

export default App;
