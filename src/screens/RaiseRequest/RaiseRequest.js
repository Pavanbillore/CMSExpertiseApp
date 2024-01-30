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
  ScrollView,
  StatusBar,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Menu from 'react-native-vector-icons/AntDesign';
import Batch from 'react-native-vector-icons/Ionicons';
import Depart from 'react-native-vector-icons/MaterialIcons';
import Currencyy from 'react-native-vector-icons/MaterialCommunityIcons';
import Pose from 'react-native-vector-icons/AntDesign';
import User from 'react-native-vector-icons/FontAwesome';
import Lock from 'react-native-vector-icons/AntDesign';
import Mail from 'react-native-vector-icons/AntDesign';
import Styles from './RaiseRequestStyles';
import Ponum from 'react-native-vector-icons/AntDesign';
import Phones from 'react-native-vector-icons/Feather';
import Down from 'react-native-vector-icons/AntDesign';
import EyeOn from 'react-native-vector-icons/Feather';
import Orgnts from 'react-native-vector-icons/Octicons';
import Toast from 'react-native-simple-toast';
const RaiseRequest = ({navigation}) => {
  const [isLoading, setLoading] = useState(true);
  const [totalamount, settotalamount] = useState('');
  const [percentamount, setpercentamount] = useState('');
  const [amount, setAmount] = useState('');
  const [addvanceamount, setaddvanceamount] = useState('');
  const [supplierName, setsupplierName] = useState('');
  const [supplycurruncy, setsupplycurruncy] = useState('');
  const [phone, setPhone] = useState('');
  const [devision, setDevision] = useState('');
  const [departments, setDepartments] = useState('');
  const [position, setPosition] = useState('');
  const [password, setPassword] = useState('');
  const [profile, setProfile] = useState('');
  const [payDate, setpayDate] = useState('');
  const [povalue, setPovalue] = useState('');
  const [pymentType, setpymentType] = useState('');
  const [paymentTypes, setpaymentTypes] = useState(false);
  const [nmberType, setnmberType] = useState('');
  const [numberType, setnumberType] = useState(false);
  const paymentType = [
    {
      id: 1,
      title: 'Expertise',
      onPress: () => {
        setpaymentTypes(false), setpymentType('Expertise');
      },
    },
    {
      id: 2,
      title: 'OceanWings',
      onPress: () => {
        setpaymentTypes(false), setpymentType('OceanWings');
      },
    },
    {
      id: 2,
      title: 'Standard Arabia',
      onPress: () => {
        setpaymentTypes(false), setpymentType('Standard Arabia');
      },
    },
  ];
  const numType = [
    {
      id: 1,
      title: '12',
      onPress: () => {
        setnumberType(false), setnmberType('12');
      },
    },
    {
      id: 2,
      title: '13',
      onPress: () => {
        setnumberType(false), setnmberType('13');
      },
    },
    {
      id: 2,
      title: '14',
      onPress: () => {
        setnumberType(false), setnmberType('14');
      },
    },
  ];
  return (
    <SafeAreaView style={Styles.mainContainer}>
      <StatusBar backgroundColor={'#0c7ec4'} />
      <View style={Styles.mainBody}>
        <View style={Styles.headerContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Menu name="arrowleft" color={'#fff'} size={26} />
          </TouchableOpacity>
          <View style={{paddingHorizontal: 80}}>
            <Text style={[Styles.lable1, {color: '#fff'}]}>
              Raise a Request
            </Text>
          </View>
        </View>
      </View>

      <View style={Styles.mainInputContainer}>
        <View style={Styles.boxContainer}>
          <Text style={Styles.lable}>Fill Supplier Details</Text>
          <ScrollView scrollEnabled style={{padding: 15}}>
            <View>
              <Orgnts
                name="organization"
                size={22}
                color={'#000'}
                style={Styles.iconCalender}
              />
              <TextInput
                placeholder="Requestor Company"
                placeholderTextColor={'gray'}
                value={pymentType ? pymentType : ''}
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
              <View style={Styles.c1}>
                {paymentType.map((item, i) => (
                  <View key={item}>
                    <TouchableOpacity onPress={item.onPress} style={Styles.c2}>
                      <Text style={Styles.c3}>{item.title}</Text>
                    </TouchableOpacity>
                  </View>
                ))}
              </View>
            ) : null}
            <View>
              <User
                name="file-powerpoint-o"
                size={22}
                color={'#000'}
                style={Styles.iconCalender}
              />
              <TextInput
                placeholder="PO Number"
                placeholderTextColor={'gray'}
                value={nmberType ? nmberType : ''}
                onChangeText={text => setnmberType(text)}
                editable={false}
                style={Styles.InputContainer}
              />
              <TouchableOpacity
                onPress={() => setnumberType(true)}
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
            {numberType ? (
              <View style={Styles.c4}>
                {numType.map((item, i) => (
                  <View key={item}>
                    <TouchableOpacity onPress={item.onPress} style={Styles.c5}>
                      <Text style={Styles.c6}>{item.title}</Text>
                    </TouchableOpacity>
                  </View>
                ))}
              </View>
            ) : null}
            <View>
              <User
                name="user-o"
                color={'black'}
                size={22}
                style={Styles.iconCalender}
              />
              <TextInput
                placeholder="Supplier Name"
                placeholderTextColor={'gray'}
                value={supplierName}
                onChangeText={text => setsupplierName(text)}
                style={Styles.InputContainer}
              />
            </View>
            <View>
              <Ponum
                name="barchart"
                color={'black'}
                size={22}
                style={Styles.iconCalender}
              />
              <TextInput
                placeholder="PO value"
                placeholderTextColor={'gray'}
                value={povalue}
                keyboardType="number-pad"
                maxLength={5}
                onChangeText={text => setPovalue(text)}
                style={Styles.InputContainer}
              />
            </View>

            <View>
              <Currencyy
                name="account-cash-outline"
                color={'black'}
                size={24}
                style={Styles.iconCalender}
              />
              <TextInput
                placeholder="Supplier Currency"
                placeholderTextColor={'gray'}
                value={supplycurruncy}
                onChangeText={text => setsupplycurruncy(text)}
                style={Styles.InputContainer}
              />
            </View>

            <View>
              <Batch
                name="flag-outline"
                size={22}
                color={'#000'}
                style={Styles.iconCalender}
              />
              <TextInput
                placeholder="Devision"
                placeholderTextColor={'gray'}
                value={devision}
                keyboardType="number-pad"
                onChangeText={text => setDevision(text)}
                style={Styles.InputContainer}
              />
            </View>
            <View>
              <Depart
                name="subject"
                size={22}
                color={'#000'}
                style={Styles.iconCalender}
              />
              <TextInput
                placeholder="Departments"
                placeholderTextColor={'gray'}
                value={departments}
                keyboardType="number-pad"
                onChangeText={text => setDepartments(text)}
                style={Styles.InputContainer}
              />
            </View>
            <View>
              <Phones
                name="phone"
                color={'black'}
                size={22}
                style={Styles.iconCalender}
              />
              <TextInput
                placeholder="Supplier Contact No."
                placeholderTextColor={'gray'}
                value={phone}
                keyboardType="number-pad"
                onChangeText={text => setPhone(text)}
                style={Styles.InputContainer}
              />
            </View>
            <View>
              <Pose
                name="pay-circle-o1"
                size={23}
                color={'#000'}
                style={Styles.iconCalender}
              />
              <TextInput
                placeholder="Advance Amount"
                placeholderTextColor={'gray'}
                value={amount}
                keyboardType="number-pad"
                onChangeText={text => setAmount(text)}
                style={Styles.InputContainer}
              />
            </View>
            <View>
              <Currencyy
                name="table-column-plus-before"
                size={23}
                color={'#000'}
                style={Styles.iconCalender}
              />
              <TextInput
                placeholder="Advance Paid Earlier"
                placeholderTextColor={'gray'}
                value={addvanceamount}
                keyboardType="number-pad"
                onChangeText={text => setaddvanceamount(text)}
                style={Styles.InputContainer}
              />
            </View>
            <View>
              <Currencyy
                name="contactless-payment-circle-outline"
                size={23}
                color={'#000'}
                style={Styles.iconCalender}
              />
              <TextInput
                placeholder="Total Advance"
                placeholderTextColor={'gray'}
                value={totalamount}
                keyboardType="number-pad"
                onChangeText={text => settotalamount(text)}
                style={Styles.InputContainer}
              />
            </View>
            <View style={{marginBottom: 20}}>
              <Menu
                name="calculator"
                size={23}
                color={'#000'}
                style={Styles.iconCalender}
              />
              <TextInput
                placeholder="% of Advance"
                placeholderTextColor={'gray'}
                value={percentamount}
                keyboardType="number-pad"
                onChangeText={text => setpercentamount(text)}
                style={Styles.InputContainer}
              />
            </View>
          </ScrollView>
          <TouchableOpacity style={Styles.SaveContainer}>
            <Text style={Styles.saveText}>Send Request</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RaiseRequest;
const {width, height} = Dimensions.get('window');
