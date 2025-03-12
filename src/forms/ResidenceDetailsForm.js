import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {useDispatch, useSelector} from 'react-redux';
import {setResidenceDetails} from '../redux/FormRedux/FormSlice';

const validationSchema = Yup.object().shape({
  houseNo: Yup.string().required('House No. is required'),
  city: Yup.string().required('City is required'),
  state: Yup.string().required('State is required'),
});

const ResidenceDetailsForm = ({navigation}) => {
  const dispatch = useDispatch();
  const residenceDetails = useSelector(state => state.form.residenceDetails);
  const handleContinue = values => {
    dispatch(
      setResidenceDetails({
        houseNo: values.houseNo,
        city: values.city,
        state: values.state,
      }),
    );
    navigation.navigate('PaymentDetailForm');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Residence Details</Text>

      <Formik
        initialValues={{
          houseNo: residenceDetails.houseNo,
          city: residenceDetails.city,
          state: residenceDetails.state,
        }}
        validationSchema={validationSchema}
        onSubmit={handleContinue}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View>
            <TextInput
              style={styles.input}
              placeholder="House No."
              value={values.houseNo}
              onChangeText={handleChange('houseNo')}
              onBlur={handleBlur('houseNo')}
            />
            {touched.houseNo && errors.houseNo && (
              <Text style={styles.errorText}>{errors.houseNo}</Text>
            )}
            <TextInput
              style={styles.input}
              placeholder="City"
              value={values.city}
              onChangeText={handleChange('city')}
              onBlur={handleBlur('city')}
            />
            {touched.city && errors.city && (
              <Text style={styles.errorText}>{errors.city}</Text>
            )}
            <TextInput
              style={styles.input}
              placeholder="State"
              value={values.state}
              onChangeText={handleChange('state')}
              onBlur={handleBlur('state')}
            />
            {touched.state && errors.state && (
              <Text style={styles.errorText}>{errors.state}</Text>
            )}
            <TouchableOpacity
              style={styles.continueButton}
              onPress={handleSubmit}>
              <Text style={styles.continueButtonText}>Continue</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  continueButton: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  continueButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
  },
});

export default ResidenceDetailsForm;
