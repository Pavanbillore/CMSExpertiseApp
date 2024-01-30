import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  FlatList,
  Image,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Menu from 'react-native-vector-icons/AntDesign';
import Noti from 'react-native-vector-icons/FontAwesome';
import Right from 'react-native-vector-icons/AntDesign';
import Verify from 'react-native-vector-icons/Foundation';
import Clock from 'react-native-vector-icons/Ionicons';
import Toast from 'react-native-simple-toast';
import Styles from './DashboardStyles';
const Dashboard = ({navigation}) => {
  const User = require('../../assets/images/profile.png');
  const [isLoading, setLoading] = useState(true);
  const [index, setIndex] = React.useState(0);
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
  const dashboardData = [
    {
      id: '0',
      pick: require('../../assets/images/usergreen.png'),
      name: 'TOTAL EMPLOYEE',
      title: '4',
    },
    {
      id: '1',
      name: 'TOTAL CARDS',
      pick: require('../../assets/images/redMoney.png'),
      title: '3',
    },
    {
      id: '2',
      name: 'TOTAL SUPPLIER',
      pick: require('../../assets/images/blurBag.png'),
      title: '3',
    },
    {
      id: '3',
      name: 'DEPARTMENTS',
      pick: require('../../assets/images/walletOrange.png'),
      title: '2',
    },
  ];
  const Img = require('../../assets/images/profile.png');
  const SuppliersData = [
    {
      id: '0',
      pick: require('../../assets/images/profile.png'),
      name: 'Curve Systems',
      title: 'Mr. Gopal Rajput',
      service: 'IT Services',
      weeks: '5',
    },
    {
      id: '1',
      name: 'Digitech Galaxy',
      pick: require('../../assets/images/profile.png'),
      title: 'John Roberts',
      service: 'Watches',
      weeks: '895',
    },
    {
      id: '2',
      name: 'Nesta Technologies',
      pick: require('../../assets/images/profile.png'),
      title: 'Harley Fuller',
      service: 'Bike Accessories',
      weeks: '3470',
    },
    {
      id: '3',
      name: 'Zoetic Fashion',
      pick: require('../../assets/images/profile.png'),
      title: 'James Bowen',
      service: 'Clothes',
      weeks: '5488',
    },
    {
      id: '4',
      name: 'Meta4Systems',
      pick: require('../../assets/images/profile.png'),
      title: 'Zoe Dennis',
      service: 'Furniture',
      weeks: '4100',
    },
  ];
  return (
    <View>
      <StatusBar backgroundColor={'#0c7ec4'} />
      <View style={Styles.mainContainer}>
        <View style={Styles.mainBody}>
          <View style={Styles.headerContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Menu name="arrowleft" color={'#fff'} size={26} />
            </TouchableOpacity>
            <View>
              <Text style={Styles.lable}>Dashboard</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('profile')}>
              <Noti name="user-circle" color={'#fff'} size={28} />
            </TouchableOpacity>
          </View>
          <View style={Styles.inrContainer}>
            <View>
              <Text style={Styles.balancetxt}>Good Morning</Text>
              <Text style={Styles.balancetxt2}>
                Here's what's happening with your dashboard.
              </Text>
            </View>
          </View>
          <View style={Styles.btnCont2}>
            <FlatList
              showsVerticalScrollIndicator={false}
              scrollEnabled={false}
              numColumns={2}
              keyExtractor={item => item.id.toString()}
              data={dashboardData}
              renderItem={({item}) => (
                <View style={Styles.itemStyle1}>
                  <View style={Styles.flatContainer}>
                    <View style={{alignSelf: 'center'}}>
                      <View style={Styles.itemStyle2}>
                        <Image
                          source={item.pick}
                          resizeMode="contain"
                          style={Styles.itemStyle3}
                        />
                        <Text style={Styles.flatText}>{item.name}</Text>
                      </View>
                      <Text style={Styles.flatText2}>{item.title}</Text>
                    </View>
                    <TouchableOpacity style={Styles.itemStyle4}>
                      <Text style={Styles.flatText3}>See details</Text>
                      <Right name="arrowright" color={'#A2A5B0'} size={24} />
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            />
          </View>
          <Text style={Styles.lable2}>Top Suppliers</Text>
        </View>
      </View>

      <View style={Styles.itemStyle5}>
        <FlatList
          scrollEnabled={true}
          keyExtractor={item => item.id.toString()}
          data={SuppliersData}
          renderItem={({item}) => (
            <View style={{padding: 2, margin: 1}}>
              <View style={Styles.flatContainertop}>
                <View style={Styles.itemStyle6}>
                  <View>
                    <Image source={item.pick} style={Styles.mouseIconStyle} />
                  </View>
                  <View style={Styles.itemStyle7}>
                    <Text style={Styles.flatText5}>{item.name}</Text>
                    <Text style={Styles.flattitle}>{item.title}</Text>
                    <Text style={[Styles.flattitle2, Styles.itemStyle8]}>
                      {item.service}
                    </Text>
                  </View>
                </View>
                <View style={Styles.itemStyle9}>
                  <Clock
                    name="timer"
                    size={22}
                    color={'#F1656E'}
                    style={Styles.itemStyle10}
                  />
                  <Text style={[Styles.flatText5, Styles.itemStyle11]}>
                    {item.weeks} Week
                  </Text>
                </View>
                <View style={Styles.itemStyle12}>
                  <Verify
                    name="graph-bar"
                    size={25}
                    color={'#5BD288'}
                    style={Styles.graphstyles}
                  />
                  <Text style={[Styles.flattitle2, Styles.itemStyle13]}>
                    32%
                  </Text>
                </View>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default Dashboard;
const {width, height} = Dimensions.get('window');
