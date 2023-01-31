import React, { useContext } from "react";
import MealItemAdd from "./MealItemAdd";
import classes from './MealsItem.module.css'
import CartContext from "../../Context/Cart-context";

const MealsItem = props => {
    const price = `₹${props.price.toFixed(2)}`
    const cartctx = useContext(CartContext)

    const addToCartHandler = amount => {
        cartctx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price,
        })
    }
    return (
        <li className={classes.meal}>
            <div>
                <h2>{props.name}</h2>
                <div className={classes.about}>{props.about}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div> 
                <MealItemAdd id={props.id}  onAddToCart={addToCartHandler} /> 
            </div>
        </li>

    );
};

export default MealsItem;