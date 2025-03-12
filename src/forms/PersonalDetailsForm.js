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
import {setPersonalDetails} from '../redux/FormRedux/FormSlice';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  fatherName: Yup.string().required("Father's Name is required"),
  motherName: Yup.string().required("Mother's Name is required"),
  phoneNo: Yup.string()
    .required('Phone Number is required')
    .matches(/^[0-9]{10}$/, 'Phone Number must be 10 digits'),
  gender: Yup.string().required('Gender is required'),
});

const PersonalDetailsForm = ({navigation}) => {
  const dispatch = useDispatch();
  const personalDetails = useSelector(state => state.form.personalDetails);

  const handleContinue = values => {
    dispatch(
      setPersonalDetails({
        name: values.name,
        fatherName: values.fatherName,
        motherName: values.motherName,
        phoneNo: values.phoneNo,
        gender: values.gender,
      }),
    );
    navigation.navigate('ResidenceDetailsForm');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Personal Details</Text>

      <Formik
        initialValues={{
          name: personalDetails.name,
          fatherName: personalDetails.fatherName,
          motherName: personalDetails.motherName,
          phoneNo: personalDetails.phoneNo,
          gender: personalDetails.gender,
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
          setFieldValue,
        }) => (
          <View>
            <TextInput
              style={styles.input}
              placeholder="Name"
              value={values.name}
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
            />
            {touched.name && errors.name && (
              <Text style={styles.errorText}>{errors.name}</Text>
            )}
            <TextInput
              style={styles.input}
              placeholder="Father's Name"
              value={values.fatherName}
              onChangeText={handleChange('fatherName')}
              onBlur={handleBlur('fatherName')}
            />
            {touched.fatherName && errors.fatherName && (
              <Text style={styles.errorText}>{errors.fatherName}</Text>
            )}
            <TextInput
              style={styles.input}
              placeholder="Mother's Name"
              value={values.motherName}
              onChangeText={handleChange('motherName')}
              onBlur={handleBlur('motherName')}
            />
            {touched.motherName && errors.motherName && (
              <Text style={styles.errorText}>{errors.motherName}</Text>
            )}
            <TextInput
              style={styles.input}
              placeholder="Phone No"
              value={values.phoneNo}
              onChangeText={handleChange('phoneNo')}
              onBlur={handleBlur('phoneNo')}
              keyboardType="phone-pad"
            />
            {touched.phoneNo && errors.phoneNo && (
              <Text style={styles.errorText}>{errors.phoneNo}</Text>
            )}
            <View style={styles.radioContainer}>
              <Text style={styles.radioLabel}>Gender:</Text>
              <TouchableOpacity
                style={styles.radioButton}
                onPress={() => setFieldValue('gender', 'male')}>
                <View style={styles.radioCircle}>
                  {values.gender === 'male' && (
                    <View style={styles.selectedRb} />
                  )}
                </View>
                <Text>Male</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.radioButton}
                onPress={() => setFieldValue('gender', 'female')}>
                <View style={styles.radioCircle}>
                  {values.gender === 'female' && (
                    <View style={styles.selectedRb} />
                  )}
                </View>
                <Text>Female</Text>
              </TouchableOpacity>
            </View>
            {touched.gender && errors.gender && (
              <Text style={styles.errorText}>{errors.gender}</Text>
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
    flexGrow: 1,
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
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  radioLabel: {
    marginRight: 10,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
  },
  selectedRb: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#000',
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

export default PersonalDetailsForm;
