import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import Right from 'react-native-vector-icons/Entypo';
import Status from 'react-native-vector-icons/AntDesign';
import PaymentIcon from 'react-native-vector-icons/FontAwesome';
import {Tab, TabView} from 'react-native-elements';
import Cross from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/AntDesign';
import Styles from './SupplierStyles';
const Supplier = ({navigation}) => {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(false);
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
      <StatusBar backgroundColor={'#0c7ec4'} />
      <View style={Styles.vtStyless}>
        <View style={Styles.btnCont2}>
          <Tab
            value={index}
            onChange={setIndex}
            indicatorStyle={Styles.ccStyles1}
            variant="default">
            <Tab.Item
              title="Advance System"
              titleStyle={Styles.titleStyles}
              containerStyle={Styles.conStyles}
            />
            <Tab.Item
              title="Payment System"
              containerStyle={{}}
              titleStyle={Styles.titleStyles}
            />
          </Tab>
        </View>
        <ScrollView>
          <TabView value={index} onChange={setIndex}>
            <TabView.Item style={Styles.tabviewStyles}>
              <FlatList
                scrollEnabled={true}
                keyExtractor={item => item.id.toString()}
                data={Trasactions}
                renderItem={({item}) => (
                  <View style={Styles.pStyles}>
                    <View style={Styles.flatContainer}>
                      <View>
                        <View style={Styles.cStyles}>
                          <Image
                            source={item.pick}
                            style={Styles.mouseIconStyle}
                          />
                          <Text style={Styles.flatText}>{item.name}</Text>
                        </View>
                        <View style={Styles.padLeftStyles}>
                          <Text style={Styles.flatText2}>{item.title}</Text>
                        </View>
                        <View style={Styles.padLeftStyles}>
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
                  <View style={Styles.vvStyles}>
                    <View style={Styles.flatContainer}>
                      <View>
                        <View style={Styles.vtStyles}>
                          <Image
                            source={item.pick}
                            style={Styles.mouseIconStyle}
                          />
                          <Text style={Styles.flatText}>{item.name}</Text>
                        </View>
                        <View style={Styles.padLeftStyles}>
                          <Text style={Styles.flatText2}>{item.title}</Text>
                        </View>
                        <View style={Styles.padLeftStyles}>
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
        <View style={Styles.floatBtnContainer}>
          {show ? (
            <View style={Styles.floatContainer}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('raise-request');
                }}
                style={Styles.v9}>
                <Text style={Styles.flatlist}>Raise a Request</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('request-list');
                }}
                style={Styles.v10}>
                <Text style={Styles.flatlist}>Request List</Text>
              </TouchableOpacity>
            </View>
          ) : null}
          <TouchableOpacity
            style={Styles.plusContainer}
            onPress={() => {
              if (!show) {
                setShow(true);
              } else {
                setShow(false);
              }
            }}>
            {!show ? (
              <Icon name="plus" size={30} color="#fff" />
            ) : (
              <Cross name="close" size={30} color="#fff" />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Supplier;
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({});
