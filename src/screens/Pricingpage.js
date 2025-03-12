import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useState} from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {Formik} from 'formik';
import {useNavigation} from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';


const Pricingpage = () => {
  const [dayToggle, setDayToggle] = useState({
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
    sunday: false,
  });
  // const Drawer = createDrawerNavigator();

  const navigation = useNavigation();
  const [timeToggle, setTimeToggle] = useState({
    anytime: false,
    morning: false,
    afternoon: false,
    evening: false,
  });

  const [responsiblityToggle, setResponsiblityToggle] = useState({
    understand: false,
    agree: false,
  });

  const setCheckboxValue = (type, newValue) => {
    try {
      let vals = dayToggle;
      console.log(vals, newValue);
      vals[type] = newValue;
      setDayToggle(vals);
    } catch (e) {
      console.log(e);
    }
  };

  const setTimeToggleValue = (type, newValue) => {
    try {
      let vals = timeToggle;
      vals[type] = newValue;
      setTimeToggle(vals);
    } catch (e) {
      console.log(e);
    }
  };

  const setResponsiblityToggleValue = (type, newValue) => {
    try {
      let vals = responsiblityToggle;
      vals[type] = newValue;
      setResponsiblityToggle(vals);
    } catch (e) {
      console.log(e);
    }
  };

  const submit = values => {
    console.log(dayToggle);
    console.log(timeToggle);
    console.log(responsiblityToggle);
    console.log([
      values.offer,
      values.delivey1,
      values.delivey2,
      values.delivey3,
      values.weight,
    ]);
  };
  return (
    <ScrollView style={styles.wrapper}>
      <View style={styles.headingmain}>
        <Text style={{fontWeight: 'bold', fontSize: 23}}>Availability</Text>
        <Text style={{fontWeight: 'bold', fontSize: 23, color: '#ef7718'}}>
          {' '}
          and Pricing
        </Text>
      </View>
      <Text style={styles.heading}>
        Choose available days, set trip charges, and confirm understanding of
        responsibilities before creating the offer.
      </Text>
      <Text style={styles.heading}>Set Your Availability Days</Text>
      <Formik
        initialValues={{
          offer: '',
          delivey1: '',
          delivey2: '',
          delivey3: '',
          weight: '',
        }}
        onSubmit={values => submit(values)}>
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <>
            <View style={styles.maincheckboxcont}>
              <View style={styles.checkboxContainer}>
                <BouncyCheckbox
                  isChecked={dayToggle.monday}
                  onPress={newValue => setCheckboxValue('monday', newValue)}
                  fillColor="#ef7718"
                />
                <Text style={styles.label}>Monday</Text>
              </View>
              <View style={styles.checkboxContainer}>
                <BouncyCheckbox
                  isChecked={dayToggle.tuesday}
                  onPress={newValue => setCheckboxValue('tuesday', newValue)}
                  fillColor="#ef7718"
                />
                <Text style={styles.label}>Tuesday</Text>
              </View>
              <View style={styles.checkboxContainer}>
                <BouncyCheckbox
                  isChecked={dayToggle.wednesday}
                  onPress={newValue => setCheckboxValue('wednesday', newValue)}
                  fillColor="#ef7718"
                />
                <Text style={styles.label}>Wednesday</Text>
              </View>
            </View>
            <View style={styles.maincheckboxcont}>
              <View style={styles.checkboxContainer}>
                <BouncyCheckbox
                  isChecked={dayToggle.thursday}
                  onPress={newValue => setCheckboxValue('thursday', newValue)}
                  fillColor="#ef7718"
                />
                <Text style={styles.label}>Thursday</Text>
              </View>
              <View style={styles.checkboxContainer}>
                <BouncyCheckbox
                  isChecked={dayToggle.friday}
                  onPress={newValue => setCheckboxValue('friday', newValue)}
                  fillColor="#ef7718"
                />
                <Text style={styles.label}>Friday</Text>
              </View>
              <View style={styles.checkboxContainer}>
                <BouncyCheckbox
                  isChecked={dayToggle.saturday}
                  onPress={newValue => setCheckboxValue('saturday', newValue)}
                  fillColor="#ef7718"
                />
                <Text style={styles.label}>Saturday</Text>
              </View>
            </View>
            <View style={styles.maincheckboxcont}>
              <View style={styles.checkboxContainer}>
                <BouncyCheckbox
                  isChecked={dayToggle.sunday}
                  onPress={newValue => setCheckboxValue('sunday', newValue)}
                  fillColor="#ef7718"
                />
                <Text style={styles.labellast}>Sunday</Text>
              </View>
            </View>
            <Text style={styles.heading}>Until when is this offer valid</Text>
            <TextInput
              style={styles.input}
              onChangeText={handleChange('offer')}
              onBlur={handleBlur('offer')}
              value={values.offer}
              placeholder="Date"
              placeholderTextColor={'grey'}
            />
            <Text style={styles.heading}>Set Availability Time</Text>
            <View style={styles.maincheckboxcont}>
              <View style={styles.checkboxContainer}>
                <BouncyCheckbox
                  isChecked={timeToggle.anytime}
                  onPress={newValue => setTimeToggleValue('anytime', newValue)}
                  fillColor="#ef7718"
                />
                <Text style={styles.label}>Anytime</Text>
              </View>
              <View style={styles.checkboxContainer}>
                <BouncyCheckbox
                  isChecked={timeToggle.morning}
                  onPress={newValue => setTimeToggleValue('morning', newValue)}
                  fillColor="#ef7718"
                />
                <Text style={styles.label}>Mornings</Text>
              </View>
              <View style={styles.checkboxContainer}>
                <BouncyCheckbox
                  isChecked={timeToggle.afternoon}
                  onPress={newValue =>
                    setTimeToggleValue('afternoon', newValue)
                  }
                  fillColor="#ef7718"
                />
                <Text style={styles.label}>Afternoons</Text>
              </View>
            </View>
            <View style={styles.maincheckboxcont}>
              <View style={styles.checkboxContainer}>
                <BouncyCheckbox
                  isChecked={timeToggle.evening}
                  onPress={newValue => setTimeToggleValue('evening', newValue)}
                  fillColor="#ef7718"
                />
                <Text style={styles.labellast}>Evenings</Text>
              </View>
            </View>
            <Text style={styles.headingnew}>
              How much would you like to charge per day delivery?
            </Text>
            <Text style={styles.headingshort}>
              (Pick up from vendors+delivery to recipient+your profit margin)
            </Text>
            <TextInput
              style={styles.input}
              onChangeText={handleChange('delivey1')}
              onBlur={handleBlur('delivey1')}
              value={values.delivey1}
              placeholder="Enter Amount"
              placeholderTextColor={'grey'}
            />
            <Text style={{fontWeight: 'bold'}}>
              How much would you charge for 2nd delivery attempt if needed?
            </Text>
            <TextInput
              style={styles.input}
              onChangeText={handleChange('delivey2')}
              onBlur={handleBlur('delivey2')}
              value={values.delivey2}
              placeholder="Enter Amount"
              placeholderTextColor={'grey'}
            />
            <Text style={{fontWeight: 'bold'}}>
              How much would you charge for 3rd delivery attempt if needed?
            </Text>
            <TextInput
              style={styles.input}
              onChangeText={handleChange('delivey3')}
              onBlur={handleBlur('delivey3')}
              value={values.delivey3}
              placeholder="Enter Amount"
              placeholderTextColor={'grey'}
            />
            <Text style={{fontWeight: 'bold'}}>
              what is the maximum weight you can carry per delivery trip? (kg)
            </Text>
            <TextInput
              style={styles.input}
              onChangeText={handleChange('weight')}
              onBlur={handleBlur('weight')}
              value={values.weight}
              placeholder="Enter Weight"
              placeholderTextColor={'grey'}
            />
            <Text style={{fontWeight: 'bold', fontSize: 23, marginBottom: 18}}>
              Confirm Responsibility
            </Text>
            {/* <View style={styles.checkboxContainer}> */}
              <BouncyCheckbox
                 size={25}
                 fillColor="red"
                 unFillColor="#FFFFFF"
                 text="Custom Checkbox"
                 iconStyle={{ borderColor: "red" }}
                 innerIconStyle={{ borderWidth: 2 }}
                 textStyle={{ fontFamily: "JosefinSans-Regular", marginLeft: -10 }}
                 onPress={() => {console.log('isChecked')}}
              />
              {/* <Text style={styles.headingshort}>
                I understand the responsibilitiesof the delivery job. I will
                ensure timely pickups and deliveries.
              </Text>
            </View> */}
            <View style={styles.checkboxContainer}>
              <BouncyCheckbox
                isChecked={responsiblityToggle.agree}
                onPress={newValue =>
                  setResponsiblityToggleValue('agree', newValue)
                }
                fillColor="#ef7718"
              />
              <Text style={styles.headingshort}>
                I agree to the terms and conditions. I have read and undertood
                the terms.
              </Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text
                style={{fontWeight: 'bold', fontSize: 18, color: '#ef7718'}}>
                Create Offer
              </Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  headingmain: {
    fontWeight: 'bold',
    fontSize: 23,
    marginBottom: 16,
    flexDirection: 'row',
  },
  heading: {
    fontWeight: 'bold',
    paddingBottom: 18,
  },
  checkboxContainer: {
    flexDirection: 'row',
  },
  checkbox: {
    // alignSelf: 'center',
  },
  label: {
    margin: 6,
  },
  labellast: {
    margin: 8,
    marginBottom: 18,
  },
  maincheckboxcont: {
    flexDirection: 'row',
  },
  input: {
    height: 40,
    borderWidth: 2,
    padding: 10,
    borderRadius: 9,
    marginBottom: 18,
    borderColor: '#ef7718',
  },
  headingnew: {
    paddingBottom: 8,
    fontWeight: 'bold',
  },
  headingshort: {
    fontSize: 11,
    paddingBottom: 12,
  },
  button: {
    alignItems: 'center',
    padding: 9,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: '#ef7718',
    marginBottom: 26,
  },
});

export default Pricingpage;
