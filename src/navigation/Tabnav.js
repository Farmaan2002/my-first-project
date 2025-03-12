import {StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from '../screens/Profile';
import Child from '../screens/Child';
import Pricingpage from '../screens/Pricingpage';

const Tabnav = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator >
      <Tab.Screen name="Price" component={Pricingpage} />
      <Tab.Screen name="profile" component={Profile} />
      <Tab.Screen name="child" component={Child} />
    </Tab.Navigator>
  );
};

export default Tabnav;
