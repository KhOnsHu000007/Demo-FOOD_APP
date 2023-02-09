import React, { useContext, useState } from "react";
import Modal from "../UI/Modal";
import classes from './Cart.module.css'
import CartContext from "../Context/Cart-context";
import CartItem from "./CartItem";
import UserForm from "../Forms/userForm";

const Cart = props => {
    const [showForm, setShowForm] = useState(false)
    const cartCtx = useContext(CartContext)
    const totalAmount = `₹${cartCtx.totalAmount.toFixed(2)}`
    const isEmpty = cartCtx.items.length > 0

    const addItemHandler = item => {
        cartCtx.addItem({ ...item, amount: 1 })
    }

    const removeItemHandler = id => {
        cartCtx.removeItem(id)
    }

    const orderHandler = () => {
        setShowForm(true)
    }

    const cancelCart = () => {
        setShowForm(false)
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


    const actionButtons = <div className={classes.actions}>
        <button onClick={props.onClose} className={classes['button--alt']}>Close</button>
        {isEmpty && <button className={classes.button} onClick={orderHandler}>Order</button>}
    </div>

    return (
        <Modal closeModal={props.onClose}>
            <ul className={classes['cart-items']}>
                {cartItems}
            </ul>
            <div className={classes.total}>
                <span>Total Price</span>
                <span>{totalAmount}</span>
            </div>
            {showForm && <UserForm onCancel={cancelCart} />}
            {!showForm && actionButtons}

        </Modal>

    );

}

export default Cart;