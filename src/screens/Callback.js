import React, { useState, useCallback } from 'react';
import { View, Text, Button } from 'react-native';

const ChildComponent = React.memo(({ calculateFactorial, number }) => {
  console.log('ChildComponent re-rendered');
  return (
    <View>
      <Text>Factorial of {number} is {calculateFactorial(number)}</Text>
    </View>
  );
});

const Callback = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(1);

  const calculateFactorial = useCallback((num) => {
    console.log('Calculating factorial');
    let result = 1;
    for (let i = 2; i <= num; i++) {
      result *= i;
    }
    return result;
  }, []);

  return (
    <View>
      <Text>Count: {count}</Text>
      <Button title="Increment Count" onPress={() => setCount(count + 1)} />
      
      <Text>Number: {number}</Text>
      <Button title="Increment Number" onPress={() => setNumber(number + 1)} />
      
      <ChildComponent calculateFactorial={calculateFactorial} number={number} />
    </View>
  );
};

export default Callback;