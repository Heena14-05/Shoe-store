import { useNavigate } from "react-router-dom";
import {useCart} from "../context/CartContext"
import { useState } from "react";

function Payment(){
    const {cart, total} = useCart();

    const navigate = useNavigate();
    const [paymentMethod, setPaymentMethod]=useState("card");
    return(
        <div className="min-h-screen">
            {/* navbar */}
            <nav className='flex items-center gap-10 bg-gray-100 px-8 py-4 shadow-md'>
                <h1 className='text-3xl bg-white rounded-full p-2'>👟</h1>
                {/* /links */}
                <div className='hidden gap-8 md:flex'>
                  <a href="/" className='teaxt-gray-600 font-semibold trasition hover:text-black'>
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


            <div className="max-w-6xl mx-auto p-10">
                <h1 className="text-3xl font-bold text-center mb-8">
                    Payment
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    <div className="lg:col-span-2 bg-gray-100 rounded-xl shadow-md p-7">
                        <div className="flex gap-8 mb-8">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="radio"
                                    name="payment"
                                    value="cod"
                                    checked={paymentMethod==="cod"}
                                    onChange={()=> setPaymentMethod("cod")} />
                                <span>Cash on delivery</span>
                            </label>

                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="radio"
                                    name="payment"
                                    value="card"
                                    checked={paymentMethod==="card"}
                                    onChange={()=> setPaymentMethod("card")} />
                                <span>Credit Card</span>
                            </label>

                        </div>
                        {paymentMethod ==="card"&&  (
                                <div className="border border-gray-300 rounded-xl p-6 max-w-md" >
                                    <div className="mb-5">
                                        <label className="block font-semibold mb-2">
                                            Enter your card number:
                                        </label>

                                        <input type="text" placeholder="Card number" className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-gray-400" />
                                    </div>

                                    <div className="mb-5">
                                        <label className="block font-semibold mb-2">
                                            Enter your card's expiry date:
                                        </label>

                                        <input type="text" placeholder="Expiry date" className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-gray-400" />
                                    </div>

                                    <div className="mb-5">
                                        <label className="block font-semibold mb-2">
                                            Enter your CVV number:
                                       </label>

                                        <input type="text" placeholder="CVV" className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-gray-400" />
                                    </div>
                                </div>
                        )}

                        <button className="mt-7 bg-[#D2B48C] text-white px-8 py-3 rounded-lg font-bold" >Confirm Payment</button>
                    </div>
                        {/* cart */}
                    <div className="h-fit bg-gray-100 rounded-xl shadow-md p-6">
                        <h2 className="text-2xl font-semibold mb-5">
                            Your Cart
                        </h2>
                        {cart.length ===0 ? (
                            <p>Your cart is empty.</p>
                        ):(
                            <div className="space-y-4">
                                {cart.map((item)=>(
                                    <div key={item.id} className="flex items-center gap-10 border-b pb-4">
                                        <div className="flex items-center gap-5">
                                            <img src={item.image} alt={item.name} className="w-20 h-20 object-contain" />
                                            <div>
                                                <h3 className="font-semibold">{item.name}</h3>
                                
                                                <p className="text-gray-600 text-sm">${item.price}x{item.quantity}</p>
                                                <p className="text-gray-600 text-sm">Quantity: {item.quantity}</p>
                                            </div>
                                        </div>
                                        <p className="font-semibold">${item.price * item.quantity}</p>
                                    </div>
                                ))}
                            </div>
                        )}

                        <div className="text-right mt-6">
                            <h1 className="text-xl font-bold">
                                Total: ${total}
                            </h1>
                        </div>

                        <button onClick={()=>navigate("/")} className="w-full mt-6 bg-[#D2B48C] text-white font-bold rounded-lg py-3">
                            Go back to Shopping
                        </button>
                    </div>


                </div>
            </div>
             
            
        </div>
    )
} 

export default Payment;