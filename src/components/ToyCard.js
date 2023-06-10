import React from "react";

function ToyCard({ toy, onDelete, onLike }) {
  const { id, name, image, likes } = toy;

  function handleLike() {
    const patchedLikes = parseInt(toy.likes) + 1;
    const patchObj = { likes: patchedLikes };
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(patchObj),
    })
      .then((r) => r.json())
      .then((obj) => onLike(obj));
  }

  function handleDelete() {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => onDelete(id));
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img src={image} alt={name} className="toy-avatar" />
      <p>{likes} Likes </p>
      <button onClick={handleLike} className="like-btn">
        Like {"<3"}
      </button>
      <button onClick={handleDelete} className="del-btn">
        Donate to GoodWill
      </button>
    </div>
  );
}

export default ToyCard;
