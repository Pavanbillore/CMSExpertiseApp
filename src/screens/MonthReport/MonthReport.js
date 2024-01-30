import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import React from 'react';
import Menu from 'react-native-vector-icons/Feather';
import Down from 'react-native-vector-icons/AntDesign';
import User from 'react-native-vector-icons/FontAwesome';
import Header from '../Header/Header';
import Styles from './MonthReportStyles';
const MonthReport = ({navigation}) => {
  const User = require('../../assets/images/profile.png');
  return (
    <SafeAreaView style={Styles.mainContainer}>
      <View style={Styles.headerContainer}>
        <TouchableOpacity style={Styles.menuStyle}>
          <Menu name="menu" color={'#000'} size={26} />
        </TouchableOpacity>
        <View style={Styles.walletConatainer}>
          <TouchableOpacity>
            <Text style={Styles.headertxt}>
              Wallet <Down name="caretdown" color={'#000'} size={16} />
            </Text>
          </TouchableOpacity>
          <Text style={Styles.wallettxt}>+ $12,500.00</Text>
        </View>
        <TouchableOpacity style={Styles.imgConatainer}>
          {/* <User name='user-circle-o' color={'#000'} size={30} /> */}
          <Image source={User} style={Styles.imgstyle} />
        </TouchableOpacity>
      </View>
      <View>
        <View style={Styles.monthContainer}>
          <Text style={Styles.monthTxt}>LAST MONTHS</Text>
          <Text style={Styles.monthTxt}>THIS MONTHS</Text>
          <Text style={Styles.monthTxt}>NEXT MONTHS</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MonthReport;
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({});
