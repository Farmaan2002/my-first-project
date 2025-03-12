import React, { useState, useMemo } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Umemo = () => {
  const [number, setNumber] = useState(0);
  const [counter, setCounter] = useState(0);

  // Factorial calculation function
  const calculateFactorial = (num) => {
    console.log('value change');
    if (num === 0 || num === 1) return 1;
    let result = 1;
    for (let i = 2; i <= num; i++) {
      result *= i;
    }
    return result;
  };

  // Memoize the factorial calculation
  const factorial = useMemo(() => calculateFactorial(number), [number]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={number.toString()}
        onChangeText={(text) => setNumber(Number(text))}
      />
      <Text style={styles.result}>Factorial is: {factorial}</Text>

      <Text style={styles.counter}>Counter: {counter}</Text>
      <Button title="Increment Counter" onPress={() => setCounter(counter + 1)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  result: {
    fontSize: 18,
    marginBottom: 20,
  },
  counter: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default Umemo;