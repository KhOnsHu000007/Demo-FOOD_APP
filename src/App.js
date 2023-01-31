import './App.css';
import React, { useState } from 'react'
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';
import Meals from './components/Meals/Meals'
import CartProvider from './components/Context/Cart-provider';


function App() {

  const [cartIsShown, setCartShown] = useState(false)

  const showCart = () => {
    setCartShown(true);
  }
  const hideCart = () => {
    setCartShown(false);
  }

  return (
    <CartProvider>
      <Header showCartHandler={showCart} />

      <main>
        <Meals />
      </main>
      
      {cartIsShown && <Cart onClose={hideCart} />}
     
    </CartProvider>
  
  );
}

export default App;
