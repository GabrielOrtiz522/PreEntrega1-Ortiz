import React from 'react'
import { useState } from 'react'

export const ItemCount = ({stock, onAdd}) => {

    let [contador, setContador] = useState(1)

    const handleSumar = () => {
        if (contador < stock ){
            setContador (contador + 1)
        }
    }

    const handleRestar = () => {
        if (contador > 0){
            setContador (contador - 1)
        }
    }

    const handleConfirmar = () => {
        onAdd (contador)
    }

  return (
    <div>
        <button onClick={handleRestar}> - </button>

        <p>Cantidad: {contador} </p>

        <button onClick={handleSumar}> + </button>

        <button onClick={handleConfirmar}> Confirmar Compra </button>
    </div>
  )
}

export default ItemCount
