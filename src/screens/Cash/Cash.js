import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Menu from 'react-native-vector-icons/AntDesign';
import Noti from 'react-native-vector-icons/Ionicons';
import Plus from 'react-native-vector-icons/AntDesign';
import Verify from 'react-native-vector-icons/MaterialIcons';
import {Tab, TabView} from 'react-native-elements';
import Toast from 'react-native-simple-toast';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import Styles from './CashStyles';
const Cash = ({navigation}) => {
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
    <SafeAreaView>
      <View style={Styles.mainContainer}>
        <View style={Styles.mainBody}>
          <View style={Styles.headerContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Menu name="arrowleft" color={'#fff'} size={26} />
            </TouchableOpacity>
            <View>
              <Text style={Styles.lable}>My Cash</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Noti name="notifications" color={'#fff'} size={26} />
            </TouchableOpacity>
          </View>

          <View style={Styles.mainStyles}>
            <View style={Styles.inrContainer}>
              <View>
                <Text style={Styles.balancetxt}>Total Balance</Text>
                <Text style={Styles.balancetxt2}>INR 540.000</Text>
              </View>
            </View>
            <View>
              <TouchableOpacity
                style={Styles.plusContainer}
                onPress={() => {
                  navigation.navigate('request-form');
                }}>
                <Plus name="plus" color={'#fff'} size={28} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={Styles.btnCont2}>
            <Tab
              value={index}
              onChange={setIndex}
              indicatorStyle={Styles.indiStyles}
              variant="default">
              <Tab.Item
                title="Credit"
                titleStyle={Styles.titleStyles}
                containerStyle={{backgroundColor: '#0c7ec4'}}
                icon={{name: 'cash', type: 'ionicon', color: 'white'}}>
                <TouchableOpacity style={Styles.btnStyle}>
                  <Text style={Styles.creditTxt}>Credit</Text>
                  <Text style={Styles.creditTxt2}>
                    INR{' '}
                    <Text style={[Styles.creditTxt2, {color: 'green'}]}>
                      + 310.000
                    </Text>
                  </Text>
                </TouchableOpacity>
              </Tab.Item>
              <Tab.Item
                title="Debit"
                containerStyle={{backgroundColor: '#0c7ec4'}}
                titleStyle={Styles.titleStyles}
                icon={{
                  name: 'card',
                  type: 'ionicon',
                  color: 'white',
                }}
              />
            </Tab>
          </View>
        </View>
        <ScrollView>
          <TabView value={index} onChange={setIndex}>
            <TabView.Item style={Styles.itemStyles}>
              <FlatList
                scrollEnabled={true}
                keyExtractor={item => item.id.toString()}
                data={Trasactions}
                renderItem={({item}) => (
                  <View style={Styles.itemStyles2}>
                    <View style={Styles.flatContainer}>
                      <View>
                        <View style={Styles.itemStyles3}>
                          <Image
                            source={item.pick}
                            style={Styles.mouseIconStyle}
                          />
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
            </TabView.Item>

            <TabView.Item style={Styles.tabStyles}>
              <FlatList
                scrollEnabled={true}
                keyExtractor={item => item.id.toString()}
                data={Trasactions}
                renderItem={({item}) => (
                  <View style={Styles.contStyles}>
                    <View style={Styles.flatContainer}>
                      <View>
                        <View style={Styles.contStyles2}>
                          <Image
                            source={item.pick}
                            style={Styles.mouseIconStyle}
                          />
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
            </TabView.Item>
          </TabView>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Cash;
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({});
