import { useState, useEffect } from 'react';
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Linking, FlatList, Image } from 'react-native';
import { Button, Card, Tile, ListItem, Icon } from 'react-native-elements';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        products: state.products,
    };
};

Cart['navigationOptions'] = screenProps => ({ title: 'Cart' });

function Cart(props) {
    const list = props.products.map(a => a.quantity);
    return <Text>{list}</Text>;
}

// function Cart(props) {
//     if (props.items) {
//         const total = props.items.reduce((total, item) => item.price * item.quantity + total, 0).toFixed(2);
//         const list = props.items.map(item => {
//             return (
//                 <div className="row align-items-center bg-light m-2 p-sm-2">
//                     <div className="text-center text-md-left col-md-2">
//                         <img width="100" height="100" src={item.image} alt={item.name} />
//                     </div>
//                     <div className="col-md-3 text-center text-md-left p-sm-2">{item.name}</div>
//                     <div className="col-md-3 text-center">
//                         <button type="text" onClick={() => props.onAdd(item.id, -1)} className="btn-custom ">
//                             -
//                         </button>
//                         <span>{item.quantity}</span>
//                         <button type="text" onClick={() => props.onAdd(item.id, 1)} className="btn-custom ">
//                             +
//                         </button>
//                     </div>
//                     <div className="col-md-2 text-center p-sm-2">${item.price.toFixed(2)}</div>
//                     <div className="col-md-2 text-right d-none d-md-block">
//                         <button type="text" onClick={() => props.onAdd(item.id, -item.quantity)} className="btn btn-dark btn-sm">
//                             Remove
//                         </button>
//                     </div>
//                 </div>
//             );
//         });

//         return (
//             <div className="container">
//                 <div className="d-none d-md-flex section-title mb-4 p-2">
//                     <h6 className="col-5 ">ITEMS</h6>
//                     <h6 className="col-md-3 text-center">QTY</h6>
//                     <h6 className="col-md-2 text-center">PRICE</h6>
//                 </div>
//                 {list}
//                 <div className="d-flex custom-row justify-content-between mb-2 p-2">
//                     <h6>Total</h6>
//                     <h6>${total}</h6>
//                 </div>
//                 <div className=" text-center">
//                     <button className="btn btn-dark p-2 font-weight-bold">Proceed to Checkout</button>
//                 </div>
//             </div>
//         );
//     } else return <div />;
// }
export default connect(mapStateToProps)(Cart);
