import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Home from './Tabnav';
import Pricingpage from '../screens/Pricingpage';
import Child from '../screens/Child';
import Profile from '../screens/Profile';
import Tabnav from './Tabnav';
import Drawnav from './Drawnav';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DemoApp from '../screens/DemoApp';
import Stacknav from './Stacknav';
import { Provider } from 'react-redux';
import formstore from '../redux/FormRedux/FormStore';
import FlatlistExample from '../screens/flatlists/FlatlistEx1.js';
import FlatListTask from '../screens/flatlists/FlatListTask.js';
import Calllback from '../screens/Callback.js';
import Umemo from '../screens/Umemo.js';

const Route = () => {
  // const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();
  return (
    <Provider store={formstore}>
    <NavigationContainer>
       <Drawer.Navigator>
       <Drawer.Screen name='Login' component={Login}
       options={{headerShown:false}}
       ></Drawer.Screen>
            <Drawer.Screen name='Price' component={Pricingpage}></Drawer.Screen>
            <Drawer.Screen name='child' component={Child}></Drawer.Screen>
            <Drawer.Screen name='DemoApp' component={DemoApp}></Drawer.Screen>
            <Drawer.Screen name='FlatlistOverView' component={FlatlistExample}></Drawer.Screen>
            <Drawer.Screen name='FlatListTask' component={FlatListTask}></Drawer.Screen>
            <Drawer.Screen name='Callback' component={Calllback}></Drawer.Screen>
            <Drawer.Screen name='Umemo' component={Umemo}></Drawer.Screen>
            <Drawer.Screen name='Stacknav' component={Stacknav}></Drawer.Screen>
        </Drawer.Navigator>
    </NavigationContainer>
    </Provider>
  );
};

export default Route;
