import { Routes, Route } from "react-router-dom"
import ItemDetailContainer from "./ItemDetailContainer"
import ItemListContainer from "./ItemListContainer"
import Cart from "./Cart"

const Main = () => {
    return (
        <main>
            <Routes>

                <Route path="/" element={<ItemListContainer/>}/>

                <Route path="/productos/:category" element={<ItemListContainer/>}></Route>

                <Route path="/item/:id" element={<ItemDetailContainer/>}></Route>
                
                <Route path="/cart" element={<Cart/>}></Route>

            </Routes>
            
        </main>
    )
}

export default Main