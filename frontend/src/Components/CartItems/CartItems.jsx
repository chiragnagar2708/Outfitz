import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'
import {loadStripe} from '@stripe/stripe-js';

const CartItems = () => {
    const {clearCart, getTotalCartAmount ,all_product,  cartItems, removeFromCart} = useContext(ShopContext);

  const makePayment = async() => {
    const stripe = await loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY)
    
    const cartProducts = all_product
        .filter(product => cartItems[product.id])  
        .map(product => ({
            id: product.id,
            name: product.name,
            new_price: product.new_price,
            quantity: cartItems[product.id] 
        }));

    const body = {
      products: cartProducts 
    };
    
    const headers = {
      "Content-Type" : "application/json"
    }

    try {
      const response = await fetch("http://localhost:4000/create-checkout-session", {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body)
      });

      const session = await response.json();

      const result = stripe.redirectToCheckout({
        sessionId: session.id
      });

      if(result.error){
        console.log(result.error);
      }
      else{
        const clearCartResponse = await fetch("http://localhost:4000/clear-cart", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    'auth-token': localStorage.getItem('auth-token') // Ensure the user is authenticated
                },
                body: JSON.stringify({})
      });

      const clearCartResult = await clearCartResponse.json();

      if(clearCartResult.success){
        clearCart();
      }
      else{
        console.log("Failed to clear cart ")
      }
    }
    }
    catch (error) {
     console.log("payment Failed or error occured"); 
    }
  };

  

  return (
    <div className='cartitems'>
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />

      {all_product.map((e) => {
        if(cartItems[e.id] > 0){
            return(
                <div key={e.id}>
                    <div className="cartitems-format cartitems-format-main">
                        <img src={e?.image} alt="" className='carticon-product-icon' />
                        <p>{e?.name}</p>
                        <p>${e?.new_price}</p>
                        <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                        <p>${e?.new_price * cartItems[e.id]}</p>
                        <img className='cartitems-remove-icon' onClick={() => { removeFromCart(e.id) }} src={remove_icon} alt="" />
                    </div>
                    <hr />
                </div> 
            )          
        }
        return null;
      })}

      <div className="cartitems-down">
        <div className="cartitems-total">
            <h1>Cart Total</h1>
            <div>
                <div className="cartitems-total-item">
                    <p>Subtotal</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                    <h3>Total</h3>
                    <h3>${getTotalCartAmount()}</h3>
                </div>
            </div>
            <button onClick={makePayment}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
            <p>If you have promo code, Enter it here</p>
            <div className="cartitems-promobox">
                <input type="text" placeholder='Promo code' />
                <button>Submit</button>
            </div>
        </div>
      </div>  
    </div>
  )
}

export default CartItems
