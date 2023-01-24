import React from "react";
import { Link } from "react-router-dom";

const Item = ({producto}) => {
  return (
    <div>

      <article key={producto.id}>

        <img src={producto.image} alt="Imagen Pre Cargada" width="170px" />

        <h5> {producto.title} </h5>

        <p> U$D {producto.price} </p>

        <Link to={"/item/" + producto.id}> Ver mas </Link>

      </article>

    </div>
  );
};

export default Item
