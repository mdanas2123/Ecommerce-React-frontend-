import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Navigation from "./Components.js/Navigation";
import Cart from "./Pages/Cart";
import Products from "./Pages/Products";
import SingleProdduct from "./Pages/SingleProdduct";
import { CartContext } from "./Components.js/CartContext";
import { useEffect, useState } from "react";



const App = () => {
    const [cart ,setCart]=useState({})
    

    useEffect(()=>{
       const cart=window.localStorage.getItem('cart')
       
       setCart(JSON.parse(cart))
        
    },[])


    useEffect(()=>{
        window.localStorage.setItem('cart',JSON.stringify(cart))
         
     },[cart])


    return (
        <>
            <Router>
                <CartContext.Provider value={{cart,setCart}}>
                    
                <Navigation />
                <Routes>
                    <Route path="/" Component={Home} exact></Route>
                    <Route path="/Cart" Component={Cart}></Route>
                    <Route path="/SingleProduct/:_id" Component={SingleProdduct}></Route>
                    <Route path="/Products" Component={Products}></Route>
                </Routes>
                </CartContext.Provider>
                
            </Router>
        </>
    )
}
export default App;