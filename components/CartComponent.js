import React from 'react';
import { View, Text, StyleSheet, ScrollView, Linking, FlatList, Image } from 'react-native';
import { Button, Card, Divider } from 'react-native-elements';
import { connect } from 'react-redux';
import { addItem } from '../redux/ActionCreators';
import { imagesPath } from './ImagesPath';

const mapStateToProps = state => {
    return {
        products: state,
    };
};
const mapDispatchToProps = {
    addItem: (id, quantity) => addItem(id, quantity),
};

Cart['navigationOptions'] = screenProps => ({ title: 'Cart' });

function Cart(props) {
    if (props.products.find(item => item.quantity > 0)) {
        const total = props.products.reduce((total, item) => item.price * item.quantity + total, 0).toFixed(2);
        const list = props.products
            .filter(item => item.quantity > 0)
            .map(item => {
                return (
                    <View key={item.id}>
                        <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                            <Text style={styles.textContent}> {item.name}</Text>
                            <Text style={styles.textContent}>${item.price.toFixed(2)}</Text>
                        </View>
                        <View style={{ justifyContent: 'space-between', flexDirection: 'row', paddingLeft: 15 }}>
                            <Image style={styles.image} source={imagesPath.filter(imagePathId => imagePathId.id === item.id)[0].image} />
                            <View style={{ flexDirection: 'row', padding: 5 }}>
                                <Button title="-" buttonStyle={styles.addRemoveButton} />
                                <Text style={{ fontSize: 16, padding: 5 }}>{props.products.filter(element => element.name === item.name)[0].quantity}</Text>
                                <Button title="+" buttonStyle={styles.addRemoveButton} />
                            </View>
                        </View>
                        <Button buttonStyle={styles.removeButton} title="Remove" />
                        <Divider></Divider>
                    </View>
                );
            });
        return (
            <ScrollView>
                <View style={styles.itemContainer}>{list}</View>
                <View style={styles.itemContainer}>
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                        <Text style={styles.textContent}>Total</Text>
                        <Text style={styles.textContent}>${total}</Text>
                    </View>
                    <Button buttonStyle={styles.removeButton} title="Proceed to Checkout" />
                </View>
            </ScrollView>
        );
    }
    return (
        <Card>
            <Text style={{ padding: 100, textAlign: 'center', fontSize: 26 }}>Empty</Text>
        </Card>
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 0,
        marginTop: 5,
        borderWidth: 1,
        borderRadius: 5,
    },
    textContent: {
        padding: 10,
        fontSize: 18,
    },
    image: {
        width: 60,
        height: 60,
        marginBottom: 5,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 3,
    },
    removeButton: {
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
