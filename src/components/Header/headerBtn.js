import { useContext, useEffect, useState } from 'react';
import classes from './headerBtn.module.css'
import CartIcon from '../assets/cartIcon';
import CartContext from '../Context/Cart-context';

const HeaderBtn = props => {
    const cartCtx = useContext(CartContext)

    const NumOfItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount
    }, 0)

    const [btnBump, isBumped] = useState(false)
    const { items } = cartCtx;
    const btnClass = `${classes.button} ${btnBump === true ? classes.bump : ''}`

    useEffect(() => {
        if (items.length === 0) {
            return;
        }

        const timer = isBumped(true)
        setTimeout(() => { isBumped(false) }, 300)

        return () => {
            clearTimeout(timer)
        }

    }, [items])

    return (
        <>
            <button onClick={props.onClick} className={btnClass}>
                <span className={classes.icon}> <CartIcon /> </span>
                <span>Cart</span>
                <span className={classes.badge}>{NumOfItems}</span>
            </button>
        </>
    );
}

export default HeaderBtn;