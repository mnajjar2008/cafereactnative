import React, { useState } from 'react';
import { Icon } from 'react-native-elements';
import Home from './HomeComponent';
import SafeAreaView from 'react-native-safe-area-view';
import Menu from './MenuComponent';
import Constants from 'expo-constants';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import { View, Platform, StyleSheet, Text, ScrollView, Image } from 'react-native';
import Order from './OrderComponent';
import About from './AboutComponent';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Cart from './CartComponent';

console.disableYellowBox = true;

const TabNavigator = createBottomTabNavigator(
    {
        Pastries: () => <Order category={'pastries'} />,
        Waffles: () => <Order category={'waffles'} />,
        Breakfast: () => <Order category={'breakfast'} />,
        Lunch: () => <Order category={'lunch'} />,
        Drinks: () => <Order category={'drinks'} />,
    },
    {
        tabBarOptions: {
            activeBackgroundColor: '#1d94e5',
            inactiveBackgroundColor: '#9ed6fe',
            activeTintColor: 'black',
            inactiveTintColor: 'black',
            labelStyle: { fontSize: 16, paddingBottom: 12, fontWeight: 'bold' },
        },
    },
);

const HomeNavigator = createStackNavigator(
    {
        Home: { screen: Home },
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            headerStyle: {
                backgroundColor: 'black',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff',
            },
            headerLeft: <Icon name="home" type="font-awesome" iconStyle={styles.drawerIcon} onPress={() => navigation.toggleDrawer()} />,
        }),
    },
);

const OrderNavigator = createStackNavigator(
    {
        Order: { screen: TabNavigator },
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            headerStyle: {
                backgroundColor: 'black',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff',
            },
            headerLeft: <Icon name="credit-card" type="font-awesome" iconStyle={styles.drawerIcon} onPress={() => navigation.toggleDrawer()} />,
        }),
    },
);

const MenuNavigator = createStackNavigator(
    {
        Menu: { screen: Menu },
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            headerStyle: {
                backgroundColor: 'black',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff',
            },
            headerLeft: <Icon name="bars" type="font-awesome" iconStyle={styles.drawerIcon} onPress={() => navigation.toggleDrawer()} />,
        }),
    },
);
const AboutNavigator = createStackNavigator(
    {
        About: { screen: About },
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            headerStyle: {
                backgroundColor: 'black',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff',
            },
            headerLeft: <Icon name="info" type="font-awesome" iconStyle={styles.drawerIcon} onPress={() => navigation.toggleDrawer()} />,
        }),
    },
);

const CartNavigator = createStackNavigator(
    {
        Cart: { screen: Cart },
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            headerStyle: {
                backgroundColor: 'black',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff',
            },
            headerLeft: <Icon name="shopping-cart" type="font-awesome" iconStyle={styles.drawerIcon} onPress={() => navigation.toggleDrawer()} />,
        }),
    },
);

const CustomDrawerContentComponent = props => (
    <ScrollView>
        <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
            <View>
                <View style={{ flex: 1 }}>
                    <Image style={{ height: 200, width: '100%' }} source={require('./images/cafe-drawer-header.jpg')} />
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 26, textAlign: 'center', padding: 10 }}>San Jose Cafe</Text>
                </View>
            </View>
            <DrawerItems {...props} />
        </SafeAreaView>
    </ScrollView>
);
const MainNavigator = createDrawerNavigator(
    {
        Home: {
            screen: HomeNavigator,
            navigationOptions: {
                drawerIcon: ({ tintColor }) => <Icon name="home" type="font-awesome" size={24} color={tintColor} />,
            },
        },
        Menu: {
            screen: MenuNavigator,
            navigationOptions: {
                drawerIcon: ({ tintColor }) => <Icon name="list" type="font-awesome" size={24} color={tintColor} />,
            },
        },
        Order: {
            screen: OrderNavigator,
            navigationOptions: {
                drawerIcon: ({ tintColor }) => <Icon name="credit-card" type="font-awesome" size={20} color={tintColor} />,
            },
        },
        About: {
            screen: AboutNavigator,
            navigationOptions: {
                drawerIcon: ({ tintColor }) => <Icon name="info" type="font-awesome" size={24} color={tintColor} />,
            },
        },
        Cart: {
            screen: CartNavigator,
            navigationOptions: {
                drawerIcon: ({ tintColor }) => <Icon name="shopping-cart" type="font-awesome" size={24} color={tintColor} />,
            },
        },
    },
    { contentOptions: { activeBackgroundColor: '#1d94e5', activeTintColor: 'black' }, drawerBackgroundColor: '#9ed6fe', contentComponent: CustomDrawerContentComponent },
);

const AppNavigator = createAppContainer(MainNavigator);

function Main() {
    return (
        <View
            style={{
                flex: 1,
                paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight,
            }}
        >
            <AppNavigator />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    drawerHeader: {
        backgroundColor: '#5637DD',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
    },
    drawerHeaderText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },
    drawerImage: {
        margin: 10,
        height: 60,
        width: 60,
    },
    drawerIcon: {
        marginLeft: 20,
        color: 'white',
    },
});
export default Main;
