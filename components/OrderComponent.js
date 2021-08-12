import { useState, useEffect } from 'react';
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Linking, FlatList, Image } from 'react-native';
import { Button, Card, Tile, ListItem, Icon } from 'react-native-elements';
import { PRODUCTS } from '../shared/products';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { connect } from 'react-redux';
import { addItem } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
        products: state
    };
};

const mapDispatchToProps = {
    addItem: id => addItem(id),
};

const imagesPath = [
    { id: '0', image: require('./images/menu-items/pastries/muffin.jpeg') },
    { id: '1', image: require('./images/menu-items/pastries/scone.jpeg') },
    { id: '2', image: require('./images/menu-items/pastries/cookie.jpeg') },
    { id: '3', image: require('./images/menu-items/pastries/brownie.jpeg') },
    { id: '4', image: require('./images/menu-items/pastries/gfcookie.jpeg') },
    { id: '5', image: require('./images/menu-items/pastries/proteinpuck.jpeg') },
    { id: '6', image: require('./images/menu-items/waffles/VeganGlutenFreeWaffle.jpeg') },
    { id: '7', image: require('./images/menu-items/waffles/waffle.jpeg') },
    { id: '8', image: require('./images/menu-items/waffles/BaconCheddarWaffle.jpeg') },
    { id: '9', image: require('./images/menu-items/waffles/PestoFetaWaffle.jpeg') },
    { id: '10', image: require('./images/menu-items/breakfast/BaconCheddarSandwich.jpeg') },
    { id: '11', image: require('./images/menu-items/breakfast/TurkeySausagePepperJack.jpeg') },
    { id: '12', image: require('./images/menu-items/breakfast/VeggiePepperJack.jpeg') },
    { id: '13', image: require('./images/menu-items/breakfast/EggandCheddar.jpeg') },
    { id: '14', image: require('./images/menu-items/breakfast/AussieToast.jpeg') },
    { id: '15', image: require('./images/menu-items/breakfast/Stacks.jpeg') },
    { id: '16', image: require('./images/menu-items/breakfast/Hashbrown.jpeg') },
    { id: '17', image: require('./images/menu-items/breakfast/Sides.jpeg') },
    { id: '18', image: require('./images/menu-items/lunch/ChickenAvocado.jpeg') },
    { id: '19', image: require('./images/menu-items/lunch/TomatoMozzarella.jpeg') },
    { id: '20', image: require('./images/menu-items/lunch/HamCheese.jpeg') },
    { id: '21', image: require('./images/menu-items/lunch/GrilledCheese.jpeg') },
    { id: '22', image: require('./images/menu-items/lunch/TomatoSoup.jpeg') },
    { id: '23', image: require('./images/menu-items/lunch/WaffleDog.jpeg') },
    { id: '24', image: require('./images/menu-items/drinks/drip.jpeg') },
    { id: '25', image: require('./images/menu-items/drinks/americano.jpeg') },
    { id: '26', image: require('./images/menu-items/drinks/doubleespresso.jpeg') },
    { id: '27', image: require('./images/menu-items/drinks/cappuccino.jpeg') },
    { id: '28', image: require('./images/menu-items/drinks/latte.jpeg') },
    { id: '29', image: require('./images/menu-items/drinks/mocha.jpeg') },
    { id: '30', image: require('./images/menu-items/drinks/whitemocha.jpeg') },
    { id: '31', image: require('./images/menu-items/drinks/icedcoffee.png') },
    { id: '32', image: require('./images/menu-items/drinks/IcedTea.jpeg') },
    { id: '33', image: require('./images/menu-items/drinks/Lemonade.jpeg') },
    { id: '34', image: require('./images/menu-items/drinks/chailatte.jpeg') },
    { id: '35', image: require('./images/menu-items/drinks/hotcocoa.jpeg') },
];

Order['navigationOptions'] = screenProps => ({ title: 'Order' });

function Order(props) {
    const renderCard = ({ item }) => {
        return (
            <View style={styles.itemContainer}>
                <Image style={styles.image} source={imagesPath.filter(imagePathId => imagePathId.id === item.id)[0].image} />
                <Text style={styles.textContent}>{item.name}</Text>
                <Text style={styles.textContent}>${item.price.toFixed(2)}</Text>
                <Text style={styles.textContent}>{item.quantity}</Text>
                <Button onPress={() => props.addItem(item.id)} buttonStyle={styles.button} title="ADD" />
            </View>
        );
    };
    if (!props.category) {
        return <FlatList data={props.products} renderItem={renderCard} keyExtractor={item => item.id} />;
    }
    return <FlatList data={props.products.filter(item => item.category === props.category)} renderItem={renderCard} keyExtractor={item => item.id} />;
}

const styles = StyleSheet.create({
    itemContainer: {
        margin: 30,
        borderWidth: 1,
        borderRadius: 5,
    },
    textContent: {
        textAlign: 'center',
        fontSize: 18,
    },
    image: {
        width: '100%',
        height: 230,
        marginBottom: 5,
    },
    button: {
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 10,
        marginTop: 5,
        borderRadius: 5,
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Order);
