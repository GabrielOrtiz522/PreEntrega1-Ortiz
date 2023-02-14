import React from "react";
import { Link } from "react-router-dom";

const Item = ({producto}) => {
  return (
      <article key={producto.id} className="card-productos" >

        <img src={producto.image} alt="Imagen Pre Cargada" width="170px" />

        <h5> {producto.title} </h5>

        <p> U$D {producto.price} </p>

        <Link to={"/item/" + producto.id} className="ver-mas-btn"> Ver mas </Link>

      </article>
  );
};

export default Item
