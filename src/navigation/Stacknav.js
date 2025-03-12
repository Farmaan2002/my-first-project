
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import PersonalDetailsForm from '../forms/PersonalDetailsForm';
import ResidenceDetailsForm from '../forms/ResidenceDetailsForm';
import PaymentDetailsForm from '../forms/PaymentDetailsForm';

const Stacknav = () => {
    const Stack =createNativeStackNavigator();
  return (
            <Stack.Navigator>
                <Stack.Screen options={{headerShown:false}} name='PersonalDetailsForm' component={PersonalDetailsForm}></Stack.Screen>
                <Stack.Screen options={{headerShown:false}} name='ResidenceDetailsForm' component={ResidenceDetailsForm}></Stack.Screen>
                <Stack.Screen options={{headerShown:false}} name='PaymentDetailForm' component={PaymentDetailsForm}></Stack.Screen>
            </Stack.Navigator>
  )
}

export default Stacknav