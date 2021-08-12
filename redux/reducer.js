import { PRODUCTS } from '../shared/products';
import * as ActionTypes from './ActionTypes';

export const Products = (state = PRODUCTS, action) => {
    switch (action.type) {
        case ActionTypes.ADD_ITEM:
            return state.map(item => {
                if (item.id === action.payload) {
                    return { ...item, quantity: item.quantity + 1 };
                } else return item;
            });
        default:
            return state;
    }
};

// //state.map(b => {
//
// })
// return state
