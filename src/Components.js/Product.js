import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "./CartContext"
import { useState } from "react"

const Product = (props) => {

    const [isAdding, setisAdding] =useState(false)
    const { cart, setCart } = useContext(CartContext)
    console.log(props)
    const { product } = props
    const addToCart = (event, product) => {
        let _cart = {...cart }
        if (!_cart.items) {
            _cart.items = {}
        }
        if (_cart.items[product._id]) {
            _cart.items[product._id] += 1;

        }
        else {
            _cart.items[product._id] = 1;
        }


        if (!_cart.totalItems) {
            _cart.totalItems = 0
        }
        _cart.totalItems += 1
        setCart(_cart)
        setisAdding(true)
        setTimeout(()=>{
            setisAdding(false)
        },1000)

        event.preventDefault();
        console.log(event)
    }
    return (
        <Link to={`/SingleProduct/${product._id}`}>
            <div>
                <img src={product.image} alt='pizza' />
                <div className='text-center'>
                    <h2 className='text-lg font-bold py-2'>{product.name}</h2>
                    <span className='bg-gray-200 py-1 rounded-full text-sm px-4'>{product.size}</span>
                </div>
                <div className='flex justify-between items-center mt-4'>
                    <span>{product.price}</span>
                    <button disabled={isAdding} onClick={(e) => { addToCart(e, product) }} className={`${isAdding ?  'bg-green-500' : 'bg-yellow-500'} py-1 px-4 rounded-full font-bold`}> ADD{`${isAdding?'ED':''}`}</button>
                </div>
            </div>
        </Link>

    )
}

export default Product