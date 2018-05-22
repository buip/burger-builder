import React from 'react';
import Aux from 'react-aux';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map((igKey) => {
            return (
                <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span>: 
                    {props.ingredients[igKey]}
                </li>);
        });
    return (
        <Aux>
            <h3>Your order</h3>
            <p>A burger with these ingredients: </p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to checkout</p>
        </Aux>
    );
};

export default orderSummary;