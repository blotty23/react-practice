import React, { useReducer} from 'react';
import './Hook.css';

const products = [
  {
    emoji: '🍦',
    name: 'ice cream',
    price: 5
  },
  {
    emoji: '🍩',
    name: 'donuts',
    price: 2.5,
  },
  {
    emoji: '🍉',
    name: 'watermelon',
    price: 4
  }
];

const currencyOptions = {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
}

function getTotal(total) {
  return total.toLocaleString(undefined,currencyOptions)
}
function cartReducer(state,product) {
  return [...state, product]
}
function totalReducer(state, action) {
  if(action.type === 'add') {
    return state + action.price
  }
  return state - action.price
}

export default function Product() {
  const [cart, setCart] = useReducer(cartReducer, []);
  const [total, setTotal] = useReducer(totalReducer, 0);

  function add(product) {
    const {name, price} = product
    setCart(name);
    setTotal({price, type: 'add'});
  }

  return(
    <div className="wrapper">
      <div>
        Shopping Cart: {cart.length} total items.
      </div>
      <div>Total: {getTotal(total)}</div>
      <div>
        {products.map(product => (
          <div key={product.name}>
            <div className="product"><span role="img" aria-label={product.name}>{product.emoji}</span></div>
            <button onClick={() => add(product)}>Add</button> 
            <button>Remove</button>
          </div>
        ))}
      </div>
    </div>
  )
}