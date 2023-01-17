import React from "react";

const Item = ({producto}) => {
  return (
    <div>
      <article key={producto.id}>
        <h5> {producto.title} </h5>
        <p> {producto.description} </p>
        <p> U$D {producto.price} </p>
      </article>
    </div>
  );
};

export default Item
