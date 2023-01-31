import React, { useContext } from "react";
import Modal from "../UI/Modal";
import classes from './Cart.module.css'
import CartContext from "../Context/Cart-context";
import CartItem from "./CartItem";

const Cart = props => {
    const cartCtx = useContext(CartContext)
    const totalAmount = `₹${cartCtx.totalAmount.toFixed(2)}`
    const isEmpty = cartCtx.items.length > 0

    const addItemHandler = item => {
        cartCtx.addItem({ ...item, amount: 1 })
    }

    const removeItemHandler = id => {
        cartCtx.removeItem(id)
    }

    const cartItems = cartCtx.items.map(item =>
        <CartItem
            key={item.id}
            name={item.name}
            price={item.price}
            amount={item.amount}
            onRemove={removeItemHandler.bind(null, item.id)}
            onAdd={addItemHandler.bind(null, item)} />
    )
    return (
        <Modal closeModal={props.onClose}>
            <ul className={classes['cart-items']}>
                {cartItems}
            </ul>
            <div className={classes.total}>
                <span>Total Price</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button onClick={props.onClose} className={classes['button--alt']}>Close</button>
                {isEmpty && <button className={classes.button} onClick={() => { console.log('ORDERING') }}>Order</button>}
            </div>

        </Modal>

    );

}

export default Cart;