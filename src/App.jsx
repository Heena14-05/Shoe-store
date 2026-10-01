import { useState } from 'react'
import {useCart} from "./context/CartContext";
import { useNavigate } from 'react-router-dom';
import Payment from './pages/Payment';

import './App.css'
import { Route, Routes } from 'react-router-dom';

const shoes =[
  {
    id:1,
    name:"Casual Sneaker",
    price:80,
    image:"src/assets/shoe1.jpg",
  },
  {
    id:2,
    name:"Running Sports Shoe",
    price:90,
    image:"src/assets/shoe2.jpg",
  },
  {
    id:3,
    name:"White Casual Sneaker",
    price:70,
    image:"src/assets/shoe3.avif",
  },
  {
    id:4,
    name:"Classic Blue Shoes",
    price:80,
    image:"src/assets/shoe4.webp",
  },
  {
    id:5,
    name:"Sneaker",
    price:90,
    image:"src/assets/shoe5.jpg",
  },
  {
    id:6,
    name:"Classic Sneaker",
    price:100,
    image:"src/assets/shoe6.webp",
  },
]
function App() {

  const {
    cart,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    total,
  }=useCart();
 
const navigate = useNavigate();

const [message, setMessage] = useState("")
  return (
    <Routes>

      <Route path='/' element={
    <>
    <div className='min-h-screen bg-gray-50'>
      {/* navbar */}
      <nav className='flex items-center gap-10 bg-gray-100 px-8 py-4 shadow-md'>
        <h1 className='text-3xl bg-white rounded-full p-2'>👟</h1>
        {/* /links */}
        <div className='hidden gap-8 md:flex'>
          <a href="#" className='teaxt-gray-600 font-semibold trasition hover:text-black'>
            Home
          </a>
          <a href="#" className='teaxt-gray-600 font-semibold trasition hover:text-black'>
            Categories
          </a>
          <a href="#" className='teaxt-gray-600 font-semibold trasition hover:text-black'>
            About Us
          </a>
        </div>
      </nav>
      {/* shoe card */}
    
      <main className='max-w-7xl p-10 '>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          
          <section className='lg:col-span-2'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 '>
              {shoes.map((shoe)=>(
                <div key={shoe.id} className='group bg-white w-75 rounded-2xl shadow-md overflow-hidden'>

                  <div className='h-50  bg-white flex items-center justify-center'>
                      <img src={shoe.image} alt={shoe.name} className='h-full w-full object-contain transition duration-300 group-hover:scale-105' />
                  </div>
                  <div className='p-5 bg-[#D2B48C] group-hover:scale-105 transition duration-300 shadow-md'>
                    <h3 className='text-lg font-bold text-gray-900'>{shoe.name}</h3>
                    <div className="mt-3 text-center">
                      <p className='text-xl mb-3'>${shoe.price}</p>
                      <button onClick={()=> addToCart(shoe)} className='rounded-lg border-2 border-black px-4 py-2 text-sm font-semibold text-black trasition hover:text-white active:scale-95'>
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        {/* cart */}
        <section className='bg-gray-100 rounded-2xl shadow-md p-6 h-fit'>
        <div className='flex justify-between items-center mb-6'>
          <h2 className='text-2xl font-bold text-gray-800'>Cart</h2>

        </div>
        {cart.length ===0 && ( 
          <div className='text-center py-10'>
            <p className='text-gray-700'>Your cart is empty</p>
          </div>
        )}

        <div className='space-y-2'>
          {cart.map((item)=>(
            <div key={item.id} className='border-b  border-gray-200 pb-5 flex justify-between '>
              <div className='flex gap-4'>
                <img src={item.image} alt={item.name} className='w-15 h-15 object-contain bg-gray-50 rounded-lg' />

                <div className='flex-1 justify-between items-center'>
                  <h3 className='text-sm font-semibold text-gray-800'>{item.name}</h3>
                  <p className='text-gray-800 text-sm mt-1'> ${item.price}</p>  
                </div>
              </div>
              <div className="flex text-sm  items-center gap-3 mt-3">
                    <button onClick={()=> decreaseQuantity(item.id)} className='w-7 h-7 rounded-md bg-[#D2B48C] text-white'>
                      - </button>
                    <span className='font-semibold text-sm '>{item.quantity}</span>

                    <button onClick={()=> increaseQuantity(item.id)} className='w-7 h-7 rounded-md bg-[#D2B48C] text-white'>+</button>
              </div>
            </div>
          ))}
        </div>
        {cart.length> 0 && (
          <div className='mt-6 pt-5 border-t-2 border-gray-200' >
            <div className=' flex justify-between'>
              <span className='text-lg font-semibold'>Total</span>
              <span className='text-2xl font-bold'>${total.toFixed(2)}</span>
            </div>
            
          </div>
        )}
        <button onClick={()=> {
          if (cart.length >0){
            navigate("/payment")
          }
          else{
            setMessage("Please add an item to your cart.")
          }
        }} className='bg-[#D2B48C] w-full rounded-lg mt-2 font-bold  text-white px-6 py-3'>Payment</button>

        {cart.length===0 && message && (
          <p className='text-red-600 mt-3 font-semibold text-sm'>{message}</p>
        )}

      </section>
        </div>
      </main>
    </div>
    </>
      } />

      <Route  path='/payment' element={<Payment/>}/>
    </Routes>
  )
}

export default App
