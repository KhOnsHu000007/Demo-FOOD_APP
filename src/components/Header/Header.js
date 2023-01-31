import React from "react";
import mealsImg from '../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderBtn from "./headerBtn";

const Header = props => {
    return (
        <>
            <header className={classes.header}>
                <h1>Food App</h1>
                <HeaderBtn onClick={props.showCartHandler} />
            </header>
          
            <div className={classes['main-image']}>
                <img src={mealsImg} alt='Food' />
            </div>
        </>
    );
}

export default Header;