import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Keyboard,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Modal,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Menu from 'react-native-vector-icons/AntDesign';
import Calendars from 'react-native-vector-icons/AntDesign';
import Down from 'react-native-vector-icons/AntDesign';
import {BottomSheet, ListItem} from 'react-native-elements';
import Toast from 'react-native-simple-toast';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import Styles from './CardRequestStyle';
const CardRequest = ({navigation}) => {
  const [isLoading, setLoading] = useState(true);
  const [amount, setAmount] = useState('');
  const [purpose, setPurpose] = useState('');
  const [payDate, setpayDate] = useState('');
  const [Date, setDate] = useState('');
  const [pymentType, setpymentType] = useState('Credit');
  const [paymentTypes, setpaymentTypes] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  //   const onRefresh = React.useCallback(() => {
  //     setRefreshing(true);
  //     setTimeout(() => {
  //       setRefreshing(false);
  //     }, 2500);
  //   }, [getData]);
  // const apicall = async () => {
  //   setloader(true);
  //   var data = {
  //     Contact_Person_Name: userName,
  //     Contact_Number: phone,
  //     Company_Name: companyName,
  //     Email: email,
  //     Message: message,
  //     Branch_Location: locationName,
  //     Brand: brandName,
  //   };
  //   var cate = await api.postapi(data, 'Enquiry');
  //   if (cate && cate.Company_Name) {
  //     setloader(false);
  //     Toast.showWithGravity('Enquiry sent successfully', Toast.LONG, Toast.TOP);
  //     props.navigation.goBack();
  //     // console.log(cate);
  //   } else {
  //     setloader(false);
  //     Toast.showWithGravity(
  //       'Something went wrong please try again later',
  //       Toast.LONG,
  //       Toast.TOP,
  //     );
  //   }
  // };
  // const submitForm = () => {
  //   const strongRegex = new RegExp(
  //     '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$',
  //   );
  //   var done = true;
  //   if (locationName == '') {
  //     setlocationerror('please select the location');
  //     done = false;
  //   }
  //   // if (locationName != "") {
  //   //   setlocationName(locationName);
  //   //   setlocationerror(null);
  //   // }
  //   if (brandName == '') {
  //     setbranderror('please select the brand');
  //     done = false;
  //   }
  //   if (userName == '') {
  //     setusernameerror('please fill the person name');
  //     done = false;
  //   }
  //   if (phone == '') {
  //     setphoneerror('please fill the phone number');
  //     done = false;
  //   }
  //   if (companyName == '') {
  //     setcompanyerror('please fill the company name');
  //     done = false;
  //   }
  //   if (!strongRegex.test(email) == true) {
  //     setemailerror('please fill correct email address');
  //     return false;
  //   }
  //   if (email == '') {
  //     setemailerror('please fill the email');
  //     done = false;
  //   }
  //   if (message == '') {
  //     setmessageerror('please fill the messege field');
  //     done = false;
  //   }
  //   if (done) {
  //     apicall();
  //   } else {
  //     Toast.showWithGravity(
  //       'please fill all required details',
  //       Toast.LONG,
  //       Toast.TOP,
  //     );
  //   }
  //   Keyboard.dismiss();
  // };

  const paymentType = [
    {
      id: 1,
      title: 'Credit',
      onPress: () => {
        setpaymentTypes(false), setpymentType('Credit');
      },
    },
    {
      id: 2,
      title: 'Debit',
      onPress: () => {
        setpaymentTypes(false), setpymentType('Debit');
      },
    },
  ];
  const sendPress = () => {
    navigation.goBack();
    z;
    Toast.showWithGravity('Date selected', Toast.LONG, Toast.BOTTOM);
  };
  return (
    <SafeAreaView>
      <View style={Styles.mainContainer}>
        <View style={Styles.mainBody}>
          <View style={Styles.headerContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Menu name="arrowleft" color={'#fff'} size={26} />
            </TouchableOpacity>
          </View>
        </View>

        <SafeAreaView style={Styles.mainInputContainer}>
          <View style={Styles.boxContainer}>
            <Text style={Styles.lable}>Create Card Request</Text>
            <View style={{padding: 10}}>
              <View>
                <TextInput
                  placeholder="Card Number"
                  placeholderTextColor={'gray'}
                  value={amount}
                  keyboardType="number-pad"
                  onChangeText={text => setAmount(text)}
                  style={Styles.InputContainer}
                />
              </View>
              <View>
                <TextInput
                  placeholder="Expiry Date"
                  placeholderTextColor={'gray'}
                  value={payDate}
                  editable={false}
                  onChangeText={text => setpayDate(text)}
                  style={Styles.InputContainer}
                />
                <TouchableOpacity
                  style={Styles.iconCalender}
                  onPress={() => {
                    setModalVisible(true);
                  }}>
                  <Calendars name="calendar" color={'black'} size={22} />
                </TouchableOpacity>
              </View>
              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}>
                <View style={Styles.centeredView}>
                  <View style={Styles.modalView}>
                    <Calendar
                      style={Styles.calStyle}
                      current={'2023-08-21'}
                      onDayPress={day => {
                        // var data = [];
                        // data.push(setDate());
                        setpayDate(day.dateString);
                        setModalVisible(false);
                        Toast.showWithGravity(
                          'Date selected',
                          Toast.LONG,
                          Toast.BOTTOM,
                        );
                        console.log('day', day);
                      }}
                      markedDates={{
                        '2023-08-21': {
                          selected: true,
                          marked: true,
                          selectedColor: 'blue',
                        },
                        '2023-08-21': {marked: true},
                        '2023-08-21': {
                          selected: true,
                          marked: true,
                          selectedColor: 'blue',
                        },
                      }}
                    />
                  </View>
                </View>
              </Modal>
              <View>
                <TextInput
                  placeholder="Card Limit"
                  placeholderTextColor={'gray'}
                  value={amount}
                  keyboardType="number-pad"
                  onChangeText={text => setAmount(text)}
                  style={Styles.InputContainer}
                />
              </View>
              <View>
                <TextInput
                  placeholder="CVC Number"
                  placeholderTextColor={'gray'}
                  value={amount}
                  keyboardType="number-pad"
                  maxLength={15}
                  onChangeText={text => setAmount(text)}
                  style={Styles.InputContainer}
                />
              </View>
              <View>
                <TextInput
                  placeholder="Status"
                  placeholderTextColor={'gray'}
                  value={pymentType ? pymentType : 'Status'}
                  onChangeText={text => setpymentType(text)}
                  editable={false}
                  style={Styles.InputContainer}
                />
                <TouchableOpacity
                  onPress={() => setpaymentTypes(true)}
                  style={Styles.icon}>
                  <View style={Styles.dropdownContainer}>
                    {!paymentTypes ? (
                      <Down name="down" color={'black'} size={22} />
                    ) : (
                      <Down name="up" color={'black'} size={22} />
                    )}
                  </View>
                </TouchableOpacity>
              </View>
              {paymentTypes ? (
                <View style={Styles.payStyles}>
                  {paymentType.map((item, i) => (
                    <View key={item}>
                      <TouchableOpacity
                        onPress={item.onPress}
                        style={Styles.touchStyles}>
                        <Text style={Styles.textitemStyles}>{item.title}</Text>
                      </TouchableOpacity>
                    </View>
                  ))}
                </View>
              ) : null}
              {/*      <View>
                <TextInput
                  placeholder="Enter Purpose"
                  placeholderTextColor={'gray'}
                  value={purpose}
                  onChangeText={text => setPurpose(text)}
                  style={styles.InputContainer}
                />
                          </View>
                        */}
            </View>
            <TouchableOpacity style={Styles.SaveContainer}>
              <Text style={Styles.saveText}>Send Request</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
    </SafeAreaView>
  );
};

export default CardRequest;
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({});
