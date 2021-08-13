import { useState, useEffect } from 'react';
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Linking, FlatList, Image } from 'react-native';
import { Button, Card, Tile, ListItem, Icon, Input } from 'react-native-elements';
import { connect } from 'react-redux';
import { addItem } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
        products: state,
    };
};

const mapDispatchToProps = {
    addItem: (id, quantity) => addItem(id, quantity),
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
    const [cart, setCart] = useState([
        { name: 'Muffin', quantity: 1 },
        { name: 'Scone', quantity: 1 },
        { name: 'Cookie', quantity: 1 },
        { name: 'Brownie', quantity: 1 },
        { name: 'GF Cookie', quantity: 1 },
        { name: 'Protein Puck', quantity: 1 },
        { name: 'Vegan + Gluten Free Waffle', quantity: 1 },
        { name: 'Waffle', quantity: 1 },
        { name: 'Bacon Cheddar Waffle', quantity: 1 },
        { name: 'Pesto + Feta Waffle', quantity: 1 },
        { name: 'Bacon + Cheddar Sandwich', quantity: 1 },
        { name: 'Turkey Sausage + Pepper Jack', quantity: 1 },
        { name: 'Veggie + Pepper Jack', quantity: 1 },
        { name: 'Egg & Cheddar', quantity: 1 },
        { name: 'Aussie Toast', quantity: 1 },
        { name: 'Stacks', quantity: 1 },
        { name: 'Hashbrown', quantity: 1 },
        { name: 'Sides', quantity: 1 },
        { name: 'Chicken Avocado', quantity: 1 },
        { name: 'Tomato Mozzarella', quantity: 1 },
        { name: 'Ham + Cheese', quantity: 1 },
        { name: 'Grilled Cheese', quantity: 1 },
        { name: 'Tomato Soup', quantity: 1 },
        { name: 'Waffle Dog', quantity: 1 },
        { name: 'Drip', quantity: 1 },
        { name: 'Americano', quantity: 1 },
        { name: 'Double Espresso', quantity: 1 },
        { name: 'Cappuccino', quantity: 1 },
        { name: 'Latte', quantity: 1 },
        { name: 'Mocha', quantity: 1 },
        { name: 'White Mocha', quantity: 1 },
        { name: 'Iced Coffee', quantity: 1 },
        { name: 'Iced Tea', quantity: 1 },
        { name: 'Lemonade', quantity: 1 },
        { name: 'Chai Latte', quantity: 1 },
        { name: 'Hot Cocoa', quantity: 1 },
    ]);

    const renderCard = ({ item }) => {
        const handleAdd = () => {
            setCart(
                [...cart].map(element => {
                    if (item.name === element.name) {
                        return { ...element, quantity: element.quantity === 1 ? element.quantity : element.quantity - 1 };
                    } else return element;
                }),
            );
        };
        const handleRemove = () => {
            setCart(
                [...cart].map(element => {
                    if (item.name === element.name) {
                        return { ...element, quantity: element.quantity + 1 };
                    } else return element;
                }),
            );
        };

        return (
            <View key={item.id} style={styles.itemContainer}>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                    <Text style={styles.textContent}> {item.name}</Text>
                    <Text style={styles.textContent}>${item.price.toFixed(2)}</Text>
                </View>
                <Image style={styles.image} source={imagesPath.filter(imagePathId => imagePathId.id === item.id)[0].image} />

                <View style={{ width: '100%', justifyContent: 'center', flexDirection: 'row' }}>
                    <Button onPress={handleAdd} title="-" buttonStyle={styles.addRemoveButton} />
                    <Text style={{ fontSize: 16, padding: 5 }}>{cart.filter(element => element.name === item.name)[0].quantity}</Text>
                    <Button onPress={handleRemove} title="+" buttonStyle={styles.addRemoveButton} />
                </View>
                <Button onPress={() => props.addItem(item.id, cart.filter(element => element.name === item.name)[0].quantity)} buttonStyle={styles.addButton} title="ADD" />
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

export default connect(mapStateToProps, mapDispatchToProps)(Order);
