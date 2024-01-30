import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import WalletIcon from 'react-native-vector-icons/Entypo';
import CashIcon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/MaterialIcons';
import Home from '../screens/Home/Home';
import Profile from '../screens/Profile/Profile';
import Wallet from '../screens/Wallet/Wallet';
import Report from '../screens/Report/Report';
import Cash from '../screens/Cash/Cash';
import LottieView from 'lottie-react-native';
const BottomTabs = () => {
  const Tab = createBottomTabNavigator();
  // "#3a3185"
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: '#ff9900',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        tabBarStyle: {backgroundColor: '#fff'},
        tabBarIcon: ({focused, color, size}) => {
          let filePath;

          switch (route.name) {
            case 'Home':
              filePath = require('../../src/assets/images/home.png');
              break;
            case 'Report':
              filePath = require('../assets/images/profit-report.png');
              break;
            case 'Card':
              filePath = require('../assets/images/wallet.png');
              break;
            case 'Profile':
              filePath = require('../assets/images/userex.png');
              break;
            default:
              iconName = focused
                ? 'information-circle'
                : 'information-circle-outline';
          }
          return <LottieView source={filePath} autoPlay={focused} />;
        },
      })}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarActiveTintColor: '#0C7EC4',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Report"
        component={Report}
        options={{
          tabBarLabel: 'Report',
          tabBarActiveTintColor: '#0C7EC4',
          tabBarIcon: ({color, size}) => (
            <Icons name="library-books" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Card"
        component={Wallet}
        options={{
          tabBarLabel: 'Card',
          tabBarActiveTintColor: '#0c7ec4',
          tabBarInactiveTintColor: 'gray',
          tabBarIcon: ({color, size}) => (
            <WalletIcon name="wallet" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Cash"
        component={Cash}
        options={{
          tabBarLabel: 'Cash',
          tabBarActiveTintColor: '#0c7ec4',
          tabBarInactiveTintColor: 'gray',
          tabBarIcon: ({color, size}) => (
            <CashIcon name="credit-card" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarActiveTintColor: '#0c7ec4',
          tabBarLabel: 'Profile',
          tabBarLabelStyle: {},
          tabBarIcon: ({color, size}) => (
            <Icon name="account" color={color} size={28} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
