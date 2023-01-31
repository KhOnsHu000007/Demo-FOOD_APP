import React from "react";
import MealsData from "./meal components/MealsData";
import MealsSummary from "./meal components/MealsSummary";

const Meals = props => {
    return (
        <>
            <MealsSummary />
            <MealsData />
        </>
    );
}

export default Meals;