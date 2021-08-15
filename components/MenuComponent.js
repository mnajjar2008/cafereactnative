import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text } from 'react-native-elements';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        products: state,
    };
};

Menu['navigationOptions'] = screenProps => ({ title: 'Menu' });

function Menu(props) {
    const RenderCategory = props => {
        return props.item.map(item => {
            return (
                <View key={item.id} style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                    <Text style={styles.textContent}> {item.name}</Text>
                    <Text style={styles.textContent}>${item.price.toFixed(2)}</Text>
                </View>
            );
        });
    };
    return (
        <ScrollView>
            <View style={{ margin: 15 }}>
                <Text h3 style={{ textAlign: 'center', marginBottom: 10 }}>
                    Our Menu
                </Text>
                <Text h4 style={styles.categoryName}>
                    Pastries
                </Text>
                <RenderCategory item={props.products.filter(item => item.category === 'pastries')} />
                <Text h4 style={styles.categoryName}>
                    Waffles
                </Text>
                <RenderCategory item={props.products.filter(item => item.category === 'waffles')} />
                <Text h4 style={styles.categoryName}>
                    Breakfast
                </Text>
                <RenderCategory item={props.products.filter(item => item.category === 'breakfast')} />
                <Text h4 style={styles.categoryName}>
                    Lunch
                </Text>
                <RenderCategory item={props.products.filter(item => item.category === 'lunch')} />
                <Text h4 style={styles.categoryName}>
                    Drinks
                </Text>
                <RenderCategory item={props.products.filter(item => item.category === 'drinks')} />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    categoryName: {
        textAlign: 'center',
        marginTop: 8,
        marginBottom: 8,
        borderRadius: 10,
        borderWidth: 2,
        backgroundColor: '#9ed6fe',
    },
    textContent: {
        fontSize: 18,
    },
});

export default connect(mapStateToProps)(Menu);
