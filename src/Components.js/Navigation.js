import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "./CartContext"

const Navigation = () => {
    const cartStyle={
        background:'#F59E0D',
        display:'flex',
        padding:'6 px 12px',
        borderRadius:'30px'
       
    }


    const {cart}=useContext(CartContext)
    return (
        <>
            <nav className="container mx-auto flex item-center justify-between py-4">
                <Link to={'/'}>
                    <img style={{ height: 45 }} src="/images/logo.png" alt="logo" />
                </Link>
                <ul className="flex item-center">
                    <li> <Link to={"/"} > Home</Link></li>
                    <li className="ml-6"> <Link to={"/Products"} >Products </Link></li>
                    <li className="ml-6">
                        <Link to={"/Cart"}>
                            <div style={cartStyle}>
                            <span className="ml-3 font-bold ">{cart.totalItems}</span>
                            <img className ="mx-2  " src="/images/cart.png" alt="caat-png" /> 
                            </div>
                         
                        </Link>
                    </li>
                </ul>

            </nav>
        </>

    )
}

export default Navigation