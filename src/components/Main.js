import { Routes, Route } from "react-router-dom"

import ItemListContainer from "./ItemListContainer"

const Main = () => {
    return (
        <main>
            <Routes>

                <Route path="/" element={<ItemListContainer/>}/>

                <Route path="/productos/:category" element={<ItemListContainer/>}></Route>
                
            </Routes>
            
        </main>
    )
}

export default Main