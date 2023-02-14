import { useState } from "react"


const Carrito = () => {

    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState ("")

    const handleClick = (e) => {
        console.log (nombre, email)
    }

    const handleChangeName = (e) => {
        setNombre (e.target.value)
    }

    const handleChangeEmail = (e) => {
         setEmail (e.target.value)
    }

    return (
        <div>
            <div>
                <input type="text" onChange={handleChangeName} placeholder="Nombre"/>
            </div>
            <div>
                <input type="text" onChange={handleChangeEmail} placeholder="Email"/>
            </div>


            <button onClick={handleClick}> Finalizar Compra </button>

        </div>
    )

}

export default Carrito