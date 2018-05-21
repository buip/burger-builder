import React, {Component} from 'react';
import Aux from 'react-aux';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 1,
            bacon: 2,
            meat: 3,
            cheese: 4
        }
    }

    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <div> Burger Controls </div>
            </Aux>
        )
    }
}

export default BurgerBuilder;