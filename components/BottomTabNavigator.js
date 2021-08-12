import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Order from './OrderComponent';

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
            activeBackgroundColor: 'gray',
            inactiveBackgroundColor: 'black',
            activeTintColor: '#fff',
            inactiveTintColor: '#808080',
            labelStyle: { fontSize: 16, paddingBottom: 12 },
        },
    },
);

export default TabNavigator;
