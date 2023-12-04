import { useEffect, useState } from "react"
import { useParams, useNavigate} from "react-router-dom"

const SingleProdduct = () => {
    const [product,setProducts]=useState({})
    const params=useParams()
    const navigate=useNavigate()
    
    useEffect(()=>{
        fetch(`/api/products/${params._id}`)
        .then(res=>res.json())
        .then(product=>{
            setProducts(product)
            console.log(product)
        })
    },[])

    return (
        <div className="container mx-auto mt-12">
            {/* <button className="mb-12 font-bold" onClick={() => navigate.goBack()}>Back</button> */}
            <button className="mb-12 font-bold" onClick={() => navigate(-1)}>Back</button>
            <div className=" flex ">
                <img className="w-1/4 h-1/2" src= { product.image } alt="pizza" />
                <div className="m-16">
                    <h1 className="text-xl font-bold">{ product.name }</h1>
                    <div className="text-md">{ product.size }</div>
                    <div className="font-bold mt-2">₹ { product.price }</div>
                    <button className="bg-yellow-500 py-1 px-8 rounded-full font-bold mt-4">Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default SingleProdduct
