// Only import react-native-gesture-handler on native platforms
import 'react-native-gesture-handler';
import {View, Text} from 'react-native';
import React from 'react';
import Main from './src/screens';
import {Provider} from 'react-redux';
import { store } from './src/redux/Storenew';


const App = () => {
  return (
    <View style={{flex: 1}}>
      <Provider store={store}>
        <Main />
      </Provider>
    </View>
  );
};

export default App;
