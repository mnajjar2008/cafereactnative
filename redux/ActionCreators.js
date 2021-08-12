import * as ActionTypes from './ActionTypes';

export const addItem = id => ({
    type: ActionTypes.ADD_ITEM,
    payload: id,
});
