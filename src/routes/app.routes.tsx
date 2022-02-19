import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from '../pages/Home';
import Search from '../pages/Search';
import AllUsers from '../pages/AllUsers';
import User from '../pages/User';

const AppStack = createNativeStackNavigator();

export default function AppRoutes(){
    return(
        <AppStack.Navigator>
            <AppStack.Screen component={Home} name="Home"/>
            <AppStack.Screen component={User} name="User"/>
            <AppStack.Screen component={Search} name="Search"/>
            <AppStack.Screen component={AllUsers} name="AllUsers"/>
        </AppStack.Navigator>
    )
}

