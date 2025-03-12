import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {useDispatch, useSelector} from 'react-redux';
import {setPaymentDetails} from '../redux/FormRedux/FormSlice';

const validationSchema = Yup.object().shape({
  paymentMethod: Yup.string().required('Payment Method is required'),
});

const PaymentDetailsForm = () => {
  const dispatch = useDispatch();
  const paymentDetails = useSelector((state) => state.form.paymentDetails);
  const personalDetails = useSelector((state) => state.form.personalDetails);
  const residenceDetails = useSelector((state) => state.form.residenceDetails);

  const handleSubmit = (values) => {
    dispatch(
      setPaymentDetails({
        paymentMethod: values.paymentMethod,
      }),
    );
    const combinedData = {
      ...personalDetails,
      ...residenceDetails,
      ...values,
      totalFees: 40000, // Static value
    };
    console.log('Final Combined Data:', combinedData); // Log the combined data
    alert('Form Submitted Successfully!');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Payment Details</Text>

      <View style={styles.staticField}>
        <Text style={styles.staticLabel}>Total Fees:</Text>
        <Text style={styles.staticValue}>₹40,000</Text>
      </View>

      <Formik
        initialValues={{
          paymentMethod: paymentDetails.paymentMethod,
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}>
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
            <View style={styles.radioContainer}>
              <Text style={styles.radioLabel}>Payment Method:</Text>
              <TouchableOpacity
                style={styles.radioButton}
                onPress={() => setFieldValue('paymentMethod', 'upi')}>
                <View style={styles.radioCircle}>
                  {values.paymentMethod === 'upi' && (
                    <View style={styles.selectedRb} />
                  )}
                </View>
                <Text>UPI</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.radioButton}
                onPress={() => setFieldValue('paymentMethod', 'netBanking')}>
                <View style={styles.radioCircle}>
                  {values.paymentMethod === 'netBanking' && (
                    <View style={styles.selectedRb} />
                  )}
                </View>
                <Text>Net Banking</Text>
              </TouchableOpacity>
            </View>
            {touched.paymentMethod && errors.paymentMethod && (
              <Text style={styles.errorText}>{errors.paymentMethod}</Text>
            )}
            <TouchableOpacity
              style={styles.submitButton}
              onPress={handleSubmit}>
              <Text style={styles.submitButtonText}>Submit</Text>
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
  staticField: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  staticLabel: {
    fontSize: 16,
    marginRight: 10,
  },
  staticValue: {
    fontSize: 16,
    fontWeight: 'bold',
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
  submitButton: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  submitButtonText: {
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

export default PaymentDetailsForm;
