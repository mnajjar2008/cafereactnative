import { useState, useEffect } from 'react';
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Linking, FlatList, Image } from 'react-native';
import { Button, Card, Tile, ListItem, Icon } from 'react-native-elements';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        products: state,
    };
};

Cart['navigationOptions'] = screenProps => ({ title: 'Cart' });

function Cart(props) {
    if (props.products.find(item => item.quantity > 0)) {
        const list = props.products
            .filter(item => item.quantity > 0)
            .map(item => {
                return (
                    <Card key={item.id}>
                        <Text>{item.name} </Text>
                        <Text>{item.quantity} </Text>
                    </Card>
                );
            });

        return <Text>{list}</Text>;
    }
    return <Card />;

}

const styles = StyleSheet.create({
    itemContainer: {
        margin: 30,
        borderWidth: 1,
        borderRadius: 5,
    },
    textContent: {
        padding: 10,
        fontSize: 18,
    },
    image: {
        width: '100%',
        height: 230,
        marginBottom: 5,
        borderWidth: 3,
    },
    addButton: {
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 10,
        marginTop: 4,
        borderRadius: 5,
    },
    addRemoveButton: {
        marginBottom: 5,
        marginTop: 5,
        borderRadius: 5,
        height: 25,
        width: 25,
    },
    inputBox: {
        height: 20,
        width: 30,
    },
});


export default connect(mapStateToProps)(Cart);
