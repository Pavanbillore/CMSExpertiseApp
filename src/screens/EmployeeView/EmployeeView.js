import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  FlatList,
} from 'react-native';
import React from 'react';
import Star from 'react-native-vector-icons/FontAwesome';
import Flag from 'react-native-vector-icons/Feather';
import Share from 'react-native-vector-icons/AntDesign';
import Organize from 'react-native-vector-icons/Octicons';
import Right from 'react-native-vector-icons/AntDesign';
import Styles from './EmployeeViewStyle';
import {useRoute} from '@react-navigation/native';
const EmployeeView = ({navigation}) => {
  const {width, height} = Dimensions.get('window');
  const route = useRoute();
  const id = route.params.employeedata;
  console.log('iud', id);
  const Avatar = require('../../assets/images/avatar.jpg');
  const formatter = new Intl.DateTimeFormat('en-GB', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });

  const Data = [
    {
      id: '0',
      title: 'Overview',
      img_right: require('../../assets/images/RightArrow.png'),
      onPress: (onPress = () => {
        navigation.navigate('overview');
        console.log('OverView');
      }),
      style: Styles.l1,
    },
    {
      id: '1',
      title: 'Card Request',
      img_right: require('../../assets/images/RightArrow.png'),
      onPress: (onPress = () => {
        navigation.navigate('card-request');
        console.log('Cash Request');
      }),
      style: Styles.l2,
    },
    {
      id: '2',
      title: 'Cash Transaction',
      img_right: require('../../assets/images/RightArrow.png'),
      onPress: (onPress = () => {
        navigation.navigate('cash');
        console.log('Cash Transaction');
      }),
      style: Styles.l3,
    },
    {
      id: '3',
      title: 'Supplier Advance Request List',
      img_right: require('../../assets/images/RightArrow.png'),
      onPress: (onPress = () => {
        navigation.navigate('Supplier');
        console.log('Supplier Advance Request List');
      }),
      style: Styles.l4,
    },
  ];
  return (
    <SafeAreaView style={Styles.mainContainer}>
      <View style={Styles.childContainer}>
        <View style={Styles.boxContainer}>
          <View>
            <Image source={Avatar} style={Styles.AvatarStyle} />
          </View>
          <View style={Styles.padStyles}>
            <Text style={Styles.userTextStyle}>
              {id.firstname + ' ' + id.lastname}
            </Text>
            <View style={Styles.adminStyle}>
              <Text style={Styles.adminTextStyle}>
                {id.role ? id.role.rolename : ''}
              </Text>
            </View>
          </View>
          <View style={Styles.IconsStylesContainer}>
            <TouchableOpacity style={Styles.starStyles}>
              <Star name="star" color={'#EFAE4E'} size={18} />
            </TouchableOpacity>
            <TouchableOpacity style={Styles.starStyles}>
              <Share name="sharealt" color={'#313445'} size={18} />
            </TouchableOpacity>
            <TouchableOpacity style={Styles.starStyles}>
              <Flag name="flag" color={'#313445'} size={18} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{alignSelf: 'center', left: 40}}>
          <View style={Styles.box2Container}>
            <Organize name="organization" color={'#272A3A'} size={18} />
            <Text style={Styles.TxtStyles}>{id.email}</Text>
          </View>
          <View style={Styles.box2Container}>
            <Text style={Styles.dateTxt}>Mobile :</Text>
            <Text style={Styles.TxtStyles}>{id.phone}</Text>
          </View>
          <View style={[Styles.box2Container, {}]}>
            <Text style={Styles.dateTxt}>Create Date :</Text>
            <Text style={Styles.TxtStyles} numberOfLines={2}>
              {formatter.format(new Date(id.createdat))}
            </Text>
          </View>
        </View>
      </View>
      <View style={Styles.mainFlatContainer}>
        <FlatList
          showsVerticalScrollIndicator={true}
          keyExtractor={item => item.id.toString()}
          data={Data}
          renderItem={({item}) => (
            <TouchableOpacity style={item.style} onPress={item.onPress}>
              <View style={Styles.dirContainer}>
                <Text style={Styles.titleStyle}>{item.title}</Text>
                <Right name={'right'} color={'#fff'} size={24} />
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default EmployeeView;
