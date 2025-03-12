import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {Formik} from 'formik';
import * as yup from 'yup';
import {useState} from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useDispatch } from 'react-redux';
import login from '../redux/action/Actions';

const Login = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      // .email('Please enter valid email')
      .required('Email Address is Required'),
    password: yup
      .string()
      .min(8, ({min}) => `Password must be at least ${min} characters`)
      .required('Password is required'),
  });

  const loginuser = (values) => {
    console.log(values);
    // axios
    //   .post('https://dummyjson.com/auth/login', {
    //     username: values.email,
    //     password: values.password,
    //   })
    //   .then(response => {
    //     console.log('Login successful', response.data);
    //     AsyncStorage.setItem('userToken', response.data.token);
    //     dispatch(login(values))
        navigation.navigate('Price');
        
      // })
      // .catch(error => {
      //   console.error('Login failed', error.response);
      //   Alert.alert(
      //     'Login Failed',
      //     'Please check your credentials and try again.',
      //   );
      // });
  };
  return (
    <View style={style.wrapper}>
      <Text style={style.heading}>Login Form</Text>
      <Formik
        // validationSchema={loginValidationSchema}
        initialValues={{email: '', password: ''}}
        onSubmit={values => loginuser(values)}>
        {({handleChange, handleBlur, handleSubmit, errors, values}) => (
          <>
            <View style={style.box}>
              <Text style={{color:'#ef7718', fontWeight:'600', paddingLeft:10, marginBottom:7}}>Email</Text>
              <TextInput
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                placeholder="Enter your email"
                placeholderTextColor={'grey'}
                style={style.inputbox}
              />
              {errors.email && (
                <Text style={{fontSize: 10, color: 'red', margin:8}}>{errors.email}</Text>
              )}
            </View>
            <View style={style.box}>
              <Text style={{color:'#ef7718', fontWeight:'600', paddingLeft:10, marginBottom:7}}>Password</Text>
              <TextInput
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry
                placeholder="Enter your pass"
                placeholderTextColor={'grey'}
                style={style.inputbox}
              />
              {errors.password && (
                <Text style={{fontSize: 10, color: 'red',margin:8}}>
                  {errors.password}
                </Text>
              )}
            </View>
            <TouchableOpacity style={style.button} onPress={handleSubmit}>
              <Text style={style.btntext}>Login in</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </View>
  );
};
const style = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  heading: {
    fontSize: 29,
    marginBottom: 18,
    marginTop: 189,
    fontWeight: 'bold',
    color: '#ef7718',
  },
  box: {
    flexDirection: 'column',
    width: '90%',
    marginBottom: 18,
  },
  inputbox: {
    borderColor: '#ef7718',
    borderRadius: 19,
    borderWidth: 2,
    height: 45,
    paddingLeft:10
  },
  button: {
    justifyContent: 'center',
    height: 45,
    borderRadius: 19,
    backgroundColor: '#ef7718',
    marginBottom: 26,
    width: '90%',
    shadowColor: 'black',
    elevation: 50,
  },
  btntext: {
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});
export default Login;
