import React from "react";
import Card from "../../UI/Card";
import classes from "./mealsData.module.css"
import MealsItem from "./MealsItem";

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Maggi with cheese',
        description: 'Healthy and tasty in two minutes',
        price: 22.99,
    },
    {
        id: 'm2',
        name: 'Italian Pizza',
        description: 'Best of Italy and healthy',
        price: 216.5,
    },
    {
        id: 'm3',
        name: 'American Cheese Burger',
        description: 'American, raw, meaty',
        price: 112.99,
    },
    {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy and green',
        price: 108.99,
    },
];

const MealsData = props => {
    const mealList = DUMMY_MEALS.map(meals =>
        <MealsItem
        key={meals.id}
            id={meals.id}
            name={meals.name}
            about={meals.description}
            price={meals.price}
        />)
    return (
        <section className={classes.meals}>
            <Card>
                <ul>
                    {mealList}
                </ul>
            </Card>
        </section>
    );
}

export default MealsData;