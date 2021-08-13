import { PRODUCTS } from '../shared/products';
import * as ActionTypes from './ActionTypes';

export const Products = (state = PRODUCTS, action) => {
    switch (action.type) {
        case ActionTypes.ADD_ITEM:
            return state.map(item => {
                if (item.id === action.payload.id) {
                    return { ...item, quantity: item.quantity + action.payload.quantity };
                } else return item;
            });
        default:
            return state;
    }
};
