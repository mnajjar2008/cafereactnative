import React, { useState } from 'react';
import { Icon } from 'react-native-elements';
import Home from './HomeComponent';
import SafeAreaView from 'react-native-safe-area-view';
import Menu from './MenuComponent';
import Constants from 'expo-constants';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import { View, Platform, StyleSheet, Text, ScrollView } from 'react-native';
import About from './AboutComponent';

console.disableYellowBox = true;

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

const MenuNavigator = createStackNavigator(
    {
        Menu: { screen: Menu },
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            headerStyle: {
                backgroundColor: '#5637DD',
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

const MainNavigator = createDrawerNavigator({
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
    About: {
        screen: AboutNavigator,
        navigationOptions: {
            drawerIcon: ({ tintColor }) => <Icon name="info" type="font-awesome" size={24} color={tintColor} />,
        },
    },
});

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
        marginLeft: 10,
        color: 'white',
    },
});
export default Main;
