import React from 'react'
import { ItemCount } from './ItemCount'

const ItemDetail = ({titulo, imagen,desc ,stock = 10 }) => {

    const onAdd = (parametro) => {
        console.log(parametro)
    }

  return (

    <div>
        
        <h1>Detalle del Producto</h1>

        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, similique minus magni neque aliquam officia dolorem repellat eos fuga ad et, totam incidunt ullam tempore? Iusto nesciunt repellendus saepe, magnam ex accusantium dignissimos laborum explicabo praesentium officiis earum minima voluptates illo. Quidem, quaerat quo culpa amet nulla neque rerum voluptatem!</p>

        <ItemCount stock={stock} onAdd={onAdd} />

    </div>


  )
}

export default ItemDetail