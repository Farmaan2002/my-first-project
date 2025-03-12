import { View, Text } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Notification from '../screens/Notification';

const Drawnav = () => {
    const Drawer = createDrawerNavigator();
  return (
        <Drawer.Navigator>
            <Drawer.Screen name='Notification' component={Notification}></Drawer.Screen>
            {/* <Drawer.Screen name='Complain' component={Complain}></Drawer.Screen> */}
        </Drawer.Navigator>
  )
}

export default Drawnav