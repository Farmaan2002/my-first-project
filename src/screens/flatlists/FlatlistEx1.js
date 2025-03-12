import {View, Text, FlatList, StyleSheet} from 'react-native';
import React, { useEffect } from 'react';

const FlatlistExample = () => {

  useEffect(()=> {
    console.log("111111111111111");
  },[])
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];
  const Items = ({item}) => {
    return (
    <View style={style.box}>
      <Text style={style.boxtxt}>{item.id}</Text>
      <Text style={style.boxtxt}>{item.title}</Text>
    </View>
    )
  };

  return (
    <View style={style.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Items item={item} />}
        keyExtractor={(item)=>item.id}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#f9c2ff'
  },
  box: {
    margin:4,
    // height: '50%',
    backgroundColor: 'grey',
  },
  boxtxt: {
    fontSize: 16,
  },
});
export default FlatlistExample;
