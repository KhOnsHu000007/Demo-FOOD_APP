import React, { useEffect, useState } from "react";
import Card from "../../UI/Card";
import classes from "./mealsData.module.css"
import MealsItem from "./MealsItem";

// const DUMMY_MEALS = [
//     {
//         id: 'm1',
//         name: 'Maggi with cheese',
//         description: 'Healthy and tasty in two minutes',
//         price: 22.99,
//     },
//     {
//         id: 'm2',
//         name: 'Italian Pizza',
//         description: 'Best of Italy and healthy',
//         price: 216.5,
//     },
//     {
//         id: 'm3',
//         name: 'American Cheese Burger',
//         description: 'American, raw, meaty',
//         price: 112.99,
//     },
//     {
//         id: 'm4',
//         name: 'Green Bowl',
//         description: 'Healthy and green',
//         price: 108.99,
//     },
// ];


const baseUrl = 'https://reacthttps-663bf-default-rtdb.asia-southeast1.firebasedatabase.app/Meals.json'


const MealsData = () => {
    const [meals, setMeals] = useState([])
    const [loading, setLaoding] = useState(true)
    const [error, setError] = useState()

    useEffect(() => {
        const fetchData = async () => {

            const response = await fetch(baseUrl)
            setLaoding(false)

            if (!response.ok) {
                throw new Error('Something went wrong!')
            }
            const data = await response.json()
            const mealList = []
            for (const key in data) {
                mealList.push({
                    id: key,
                    name: data[key].name,
                    description: data[key].description,
                    price: data[key].price
                })
            }
            setMeals(mealList)
        }

        fetchData().catch(err => {
            setLaoding(false)
            setError(err.message)
        })

    }, [])

    if (loading) {
        return (
            <div className={classes.loading}>
                <p>Loading...</p>
            </div>
        )
    }

    if (error) {
        return (
            <div className={classes.error}>
                {error}
            </div>
        )
    }

    const mealData = meals.map(meals =>
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
                    {mealData}
                </ul>
            </Card>
        </section>
    );
}

export default MealsData;