import React, { useState } from 'react';
import './Hook.css';

const currencyOptions = {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
}

function getTotal(total) {
  return total.toLocaleString(undefined,currencyOptions)
}

export default function Product() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  

  return(
    <div className="wrapper">
      <div>
        Shopping Cart: {cart.length} total items.
      </div>
      <div>Total: {getTotal(total)}</div>

      <div className="product"><span ro
      le="img" aria-label="ice cream">🍦</span></div>
      <button>Add</button> <button>Remove</button>
    </div>
  )
}