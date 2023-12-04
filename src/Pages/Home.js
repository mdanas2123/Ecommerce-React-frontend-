import ProductPage from "../Components.js/ProductPage";
const Home=()=>{
    return(
        <>
         <div className="hero py-16">
            <div className="container mx-auto flex items-center justify-between ">
               <div className="w-1/2">
                   <h6 className="text-lg"><em>Are You Hungry?</em></h6>
                   <h1 className="text-3xl md:text-6xl font-bold">Don't Wait!</h1>
                   <button className="mt-6 focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"> Order Now</button>
               </div>
               <div className="w-1/2">
                 <img className ="w-4/5" src="/images/pizza.png" alt="pizza"/>
               </div>
            </div>
        </div>

        <div className="pb-24"><ProductPage/></div>
        </>
       
    )
}
export default Home;