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
import Styles from './RequstFromStyles';
import Toast from 'react-native-simple-toast';
import {Calendar, LocaleConfig} from 'react-native-calendars';
const RequestForm = ({navigation}) => {
  const [isLoading, setLoading] = useState(true);
  const [amount, setAmount] = useState('');
  const [purpose, setPurpose] = useState('');
  const [payDate, setpayDate] = useState('');
  const [Date, setDate] = useState('');
  const [pymentType, setpymentType] = useState('Credit');
  const [paymentTypes, setpaymentTypes] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

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
            <Text style={Styles.lable}>Create Cash Request</Text>
            <View style={{padding: 10}}>
              <View>
                <TextInput
                  placeholder="Enter Amount"
                  placeholderTextColor={'gray'}
                  value={amount}
                  maxLength={8}
                  keyboardType="number-pad"
                  onChangeText={text => setAmount(text)}
                  style={Styles.InputContainer}
                />
              </View>
              <View>
                <TextInput
                  placeholder="Payment Date"
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
                      style={Styles.c1}
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
                  placeholder="Payment Type"
                  placeholderTextColor={'gray'}
                  value={pymentType ? pymentType : 'Credit'}
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
                <View style={Styles.c10}>
                  {paymentType.map((item, i) => (
                    <View key={item}>
                      <TouchableOpacity
                        onPress={item.onPress}
                        style={Styles.c2}>
                        <Text style={Styles.c3}>{item.title}</Text>
                      </TouchableOpacity>
                    </View>
                  ))}
                </View>
              ) : null}
              <View>
                <TextInput
                  placeholder="Enter Purpose"
                  placeholderTextColor={'gray'}
                  value={purpose}
                  onChangeText={text => setPurpose(text)}
                  style={Styles.InputContainer}
                />
              </View>
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

export default RequestForm;
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({});
