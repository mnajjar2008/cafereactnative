import { createStore } from 'redux';
import { Products, initialState } from './reducer';

export const ConfigureStore = () => {
    const store = createStore(Products);
    return store;
};
