import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProducts} from '../redux/FetchProducts';

const DemoApp = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state);
  // console.log(JSON.stringify(products));
  console.log(products);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity
        onPress={() => {
          dispatch(fetchProducts());
        }}>
        <Text>demo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DemoApp;
