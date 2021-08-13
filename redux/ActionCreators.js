import * as ActionTypes from './ActionTypes';

export const addItem = (id, quantity) => ({
    type: ActionTypes.ADD_ITEM,
    payload: { id: id, quantity: quantity },
});
