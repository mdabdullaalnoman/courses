import React from 'react';
import './cart.css'
const Cart = (props) => {
    const cart =props.cart;
    console.log(cart)
  let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
        const price1 = cart[i];
        totalPrice = totalPrice+ price1.price;
        
    }
    return (
        <div className="cart">
            <h1> Enrolled : {cart.length}</h1>
            <h2>Total Price : {totalPrice} taka</h2>
        </div>
    );
};

export default Cart;