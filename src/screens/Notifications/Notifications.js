import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Dimensions,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
  Text,
} from 'react-native';
import {Tab, TabView} from 'react-native-elements';
import Styles from './NotifiactionsStyles';
import Clock from 'react-native-vector-icons/AntDesign';
const Notifications = () => {
  const [index, setIndex] = useState(0);
  const Trasactions = [
    {
      id: '1',
      pick: require('../../assets/images/profile.png'),
      name: 'Your Elite author Graphic Optimization reward is ready!',
      title: '30 SEC',
    },
    {
      id: '2',
      name: 'Your have recieve 20 messages in the conversations.',
      pick: require('../../assets/images/profile.png'),
      title: '2 HOUR',
    },
    {
      id: '3',
      name: 'We talked about a project on linkedin.',
      pick: require('../../assets/images/profile.png'),
      title: '4 HOUR',
    },
    {
      id: '4',
      name: 'osdnk/reanimated-bottom-sheet An implementation of the bottom sheet behaviour!',
      pick: require('../../assets/images/profile.png'),
      title: '1 HOUR',
    },
    {
      id: '5',
      name: 'The easiest way to install custom fonts to your RN project is do as follows!',
      pick: require('../../assets/images/profile.png'),
      title: '48 MIN',
    },
    {
      id: '6',
      name: 'In the latest version fonts in theme are structured based on the variant keys e.g.',
      pick: require('../../assets/images/profile.png'),
      title: '12 MIN',
    },
    {
      id: '7',
      name: 'Material Design themed swipeable tabs for React Native Paper!',
      pick: require('../../assets/images/profile.png'),
      title: 'Credit + 2556',
    },
    {
      id: '8',
      name: 'Your Elite author Graphic Optimization reward is ready!',
      pick: require('../../assets/images/profile.png'),
      title: 'Debit - 45545',
    },
    {
      id: '9',
      name: 'Your Elite author Graphic Optimization reward is ready!',
      pick: require('../../assets/images/profile.png'),
      title: 'Debit - 65655',
    },
    {
      id: '10',
      name: 'Your Elite author Graphic Optimization reward is ready!',
      pick: require('../../assets/images/profile.png'),
      title: 'Credit + 2556',
    },
    {
      id: '11',
      name: 'Your Elite author Graphic Optimization reward is ready!',
      pick: require('../../assets/images/profile.png'),
      title: 'Debit - 45545',
    },
    {
      id: '12',
      name: 'Your Elite author Graphic Optimization reward is ready!',
      pick: require('../../assets/images/profile.png'),
      title: 'Debit - 65655',
    },
  ];
  return (
    <SafeAreaView style={Styles.mainContainer}>
      <StatusBar backgroundColor={'#0c7ec4'} />
      <View style={Styles.btnCont2}>
        <Tab
          value={index}
          onChange={setIndex}
          indicatorStyle={{
            backgroundColor: '#ddd',
            height: 1,
          }}
          variant="default">
          <Tab.Item
            title="All (4)"
            titleStyle={Styles.titleStyles1}
            containerStyle={Styles.conStyles}>
            <TouchableOpacity style={Styles.btnStyle}>
              <Text style={Styles.creditTxt}>Credit</Text>
            </TouchableOpacity>
          </Tab.Item>
          <Tab.Item
            title="Alert"
            containerStyle={Styles.conStyles}
            titleStyle={Styles.titleStyles1}
          />
        </Tab>
      </View>
      <View style={Styles.maincontstyles}>
        <TabView value={index} onChange={setIndex}>
          <TabView.Item style={Styles.connStyles}>
            <FlatList
              scrollEnabled={true}
              keyExtractor={item => item.id.toString()}
              data={Trasactions}
              renderItem={({item}) => (
                <View style={Styles.mainsContainer}>
                  <View style={Styles.flatContainer}>
                    <View>
                      <Text style={Styles.flatText}>{item.name}</Text>
                      <View style={Styles.manStyles}>
                        <Clock name="clockcircleo" size={16} color={'gray'} />
                        <Text style={Styles.flatText2}>
                          JUST {item.title} AGO
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              )}
            />
          </TabView.Item>
          <View style={Styles.maincontStyles2}>
            <View style={Styles.c1}>
              <Image
                source={require('../../assets/images/notificationss.png')}
                resizeMode="cover"
                style={Styles.imgStyles}
              />
              <Text style={Styles.textStyle2}>
                Hey! You have no any notifications
              </Text>
            </View>
          </View>
        </TabView>
      </View>
      {/* <TouchableOpacity
        style={{
          backgroundColor: '#5CD38C',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{color: '#fff', fontSize: 18, fontWeight: '500'}}>
          View All Notifications
        </Text>
    </TouchableOpacity>*/}
    </SafeAreaView>
  );
};

export default Notifications;
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({});
