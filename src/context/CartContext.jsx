import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({children}) =>{
const [cart, setCart] = useState([]);

  const addToCart =(shoe)=>{
      const existingItem = cart.find(
      (item) => item.id === shoe.id
    );
    if(existingItem){
      setCart(
        cart.map((item)=> item.id === shoe.id ? {
          ...item,quantity: item.quantity+1,
        }:item)
      );

    }else{
      setCart([
        ...cart,{...shoe,quantity:1,},
      ]);
    }
  };

  const increaseQuantity = (id)=>{
    setCart(
      cart.map((item)=>item.id===id?{...item,quantity:item.quantity+1,}:item)
      
    )
  };
  const decreaseQuantity =(id)=>{
    setCart(
      cart.map((item)=>item.id===id?{...item,quantity:item.quantity-1,}:item)
      .filter((item)=>item.quantity>0)
    )
    
  }

  const total = cart.reduce(
    (sum,item)=> sum+item.price*item.quantity,
    0
  )
 return(
    <CartContext.Provider
    value={{
        cart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        total,
    }}
    >
        {children}
    </CartContext.Provider>
 )
}

export const useCart=()=>{
    return useContext(CartContext);
}