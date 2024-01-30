import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Menu from 'react-native-vector-icons/AntDesign';
import Plus from 'react-native-vector-icons/Entypo';
import Money from 'react-native-vector-icons/FontAwesome5';
import Bills from 'react-native-vector-icons/MaterialCommunityIcons';
import Styles from './WalletStyles';
import WalletType from 'react-native-vector-icons/Fontisto';
const Wallet = ({navigation}) => {
  const User = require('../../assets/images/profile.png');
  const [isLoading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = React.useState(false);
  const [data, setData] = useState([]);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2500);
  }, [getData]);
  const getData = async () => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/photos',
      );
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    getData();
  }, [onRefresh]);
  const Trasactions = [
    {
      id: '1',
      pick: require('../../assets/images/profile.png'),
      name: 'Jerom Bell',
      title: 'Credit + 2556',
    },
    {
      id: '2',
      name: 'Kill Paul',
      pick: require('../../assets/images/profile.png'),
      title: 'Debit - 45545',
    },
    {
      id: '3',
      name: 'Vinayak Singh',
      pick: require('../../assets/images/profile.png'),
      title: 'Debit - 65655',
    },
    {
      id: '4',
      name: 'Vikash Sharma',
      pick: require('../../assets/images/profile.png'),
      title: 'Credit + 2556',
    },
    {
      id: '5',
      name: 'Tom Cruise',
      pick: require('../../assets/images/profile.png'),
      title: 'Debit - 45545',
    },
    {
      id: '6',
      name: 'Rahul Sing',
      pick: require('../../assets/images/profile.png'),
      title: 'Debit - 65655',
    },
    {
      id: '7',
      name: 'Raghu Sir',
      pick: require('../../assets/images/profile.png'),
      title: 'Credit + 2556',
    },
    {
      id: '8',
      name: 'Akash Sing',
      pick: require('../../assets/images/profile.png'),
      title: 'Debit - 45545',
    },
    {
      id: '9',
      name: 'Pavan Billore',
      pick: require('../../assets/images/profile.png'),
      title: 'Debit - 65655',
    },
    {
      id: '10',
      name: 'Jerom Bell',
      pick: require('../../assets/images/profile.png'),
      title: 'Credit + 2556',
    },
    {
      id: '11',
      name: 'Anurag singh',
      pick: require('../../assets/images/profile.png'),
      title: 'Debit - 45545',
    },
    {
      id: '12',
      name: 'Ayodhya',
      pick: require('../../assets/images/profile.png'),
      title: 'Debit - 65655',
    },
  ];

  return (
    <SafeAreaView style={Styles.mainContainer}>
      <View style={Styles.mainBody}>
        <View style={Styles.headerContainer}>
          <TouchableOpacity
            style={Styles.menuStyle}
            onPress={() => navigation.goBack()}>
            <Menu name="arrowleft" color={'#fff'} size={26} />
          </TouchableOpacity>
          <TouchableOpacity
            style={Styles.imgConatainer}
            onPress={() => navigation.navigate('profile')}>
            <Image source={User} style={Styles.imgstyle} />
          </TouchableOpacity>
        </View>
        <View style={Styles.cardContainer}>
          <View>
            <Text style={Styles.cardTxt}>Card Balance</Text>
            <View style={Styles.priceConatiner}>
              <View style={Styles.cardBody}>
                <Text style={Styles.inrTxt}>INR</Text>
              </View>
              <View>
                <Text style={Styles.priceTxt}>240.000</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('card-request');
            }}>
            <View style={Styles.topupBody}>
              <Text style={Styles.topupTxt}>Request</Text>
              <Plus name="plus" color={'#EE811F'} size={28} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={Styles.mainviewStyles}>
          <Text style={Styles.priceTxt2}>All Trasactions</Text>
          <View style={Styles.TransBody}>
            <View style={Styles.allBody}>
              <Text style={Styles.hdTxt}>Credit</Text>
              <Text style={Styles.inrTxt2}>
                INR <Text style={Styles.rtTxt}>+ 310.000</Text>
              </Text>
            </View>
            <View style={Styles.allBody}>
              <Text style={Styles.hdTxt}>Debit</Text>
              <Text style={Styles.inrTxt2}>
                INR <Text style={Styles.rtTxt}>+ 530.000</Text>
              </Text>
            </View>
          </View>
        </View>
      </View>
      {isLoading ? (
        <View styles={Styles.loadStyles}>
          <ActivityIndicator size="large" color="#000" />
        </View>
      ) : (
        <View style={Styles.turnStyles}>
          <FlatList
            showsVerticalScrollIndicator={false}
            scrollEnabled={true}
            keyExtractor={item => item.id.toString()}
            data={Trasactions}
            renderItem={({item}) => (
              <View style={Styles.contStyles}>
                <View style={Styles.flatContainer}>
                  <View>
                    <View style={Styles.loaddStyles}>
                      <Image source={item.pick} style={Styles.mouseIconStyle} />
                      <Text style={Styles.flatText}>{item.name}</Text>
                    </View>
                    <View style={Styles.padStyles}>
                      <Text style={Styles.flatText2}>{item.title}</Text>
                    </View>
                    <View style={Styles.padStyles}>
                      <Text style={Styles.flatText2}>
                        Date : 15/06/2023 10:00AM
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            )}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default Wallet;
const {width, height} = Dimensions.get('window');
