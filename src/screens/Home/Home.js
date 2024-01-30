import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
  FlatList,
  BackHandler,
  ToastAndroid,
  Platform,
  StatusBar,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Menu from 'react-native-vector-icons/Feather';
import Plus from 'react-native-vector-icons/MaterialIcons';
import Notification from 'react-native-vector-icons/Ionicons';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
import Styles from './HomeStyles';
const Home = ({navigation}) => {
  const User = require('../../assets/images/profile.png');
  const HeaderLogo = require('../../assets/images/logo.png');
  const {width, height} = Dimensions.get('window');
  const Graph = require('../../assets/images/gr.png');
  const Categories = [
    {
      id: '0',
      title: 'Dashboard',
      // image: <Dashboard name='dashboard' size={30} />,
      image: require('../../assets/images/dashboardrr.png'),
      onPress: () => {
        console.log('Enter in Dashboard');
        navigation.navigate('dashboard');
      },
    },
    {
      id: '1',
      title: 'Employee',
      // image: require('../assets/images/cooperation.png'),
      image: require('../../assets/images/emp.png'),
      onPress: () => {
        console.log('Enter in employee');
        navigation.navigate('employee');
      },
    },
    {
      id: '2',
      title: 'Card Management',
      image: require('../../assets/images/cardnew.png'),
      onPress: () => {
        console.log('Enter in wallet');
        navigation.navigate('wallet');
      },
    },
    {
      id: '3',
      title: 'Cash Management',
      image: require('../../assets/images/save-money.png'),
      onPress: () => {
        console.log('Enter in cash');
        navigation.navigate('cash');
      },
    },
    {
      id: '4',
      title: 'Supplier',
      image: require('../../assets/images/vendoricon.png'),
      onPress: () => {
        console.log('Enter in supplier');
        navigation.navigate('Supplier');
      },
    },
    {
      id: '5',
      title: 'Department',
      image: require('../../assets/images/enterprised.png'),
      onPress: () => {
        console.log('Entering department-home');
        navigation.navigate('department-home');
      },
    },
  ];
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      },
    ],
  };
  const chartConfig = {
    backgroundGradientFrom: '#fff',
    backgroundGradientFromOpacity: 1,
    backgroundGradientTo: '#fff',
    backgroundGradientToOpacity: 0.5,
    color: () => '#rgb(43,134,183)',
    strokeWidth: 2,
    barPercentage: 0.5,
    propsForLabels: {
      fontSize: '10',
    },
    fillShadowGradient: '#ff9900',
    fillShadowGradientOpacity: 1,
  };
  const toggleDrawer = () => {
    navigation.toggleDrawer();
  };
  // const [exitApp, setExitApp] = useState(0);
  // const backAction = () => {
  //   setTimeout(() => {
  //     setExitApp(0);
  //   }, 2000); // 2 seconds to tap second-time

  //   if (exitApp === 0) {
  //     setExitApp(exitApp + 1);

  //     // ToastAndroid.show('Press one more time to exit', ToastAndroid.SHORT);
  //   } else if (exitApp === 1) {
  //     BackHandler.exitApp();
  //   }
  //   return true;
  // };
  // useEffect(() => {
  //   const backHandler = BackHandler.addEventListener(
  //     'hardwareBackPress',
  //     backAction,
  //   );
  //   return () => backHandler.remove();
  // });
  return (
    <SafeAreaView style={Styles.mainContainer}>
      <StatusBar backgroundColor={'#0c7ec4'} />
      <View style={Styles.headerContainer}>
        <TouchableOpacity style={Styles.menuStyle} onPress={toggleDrawer}>
          <Menu name="menu" color={'#fff'} size={26} />
        </TouchableOpacity>
        <View>
          <Image source={HeaderLogo} style={Styles.imgstyle1} />
          {/*<Text style={Styles.wallettxt}>Dashboard</Text>*/}
          {/* <Text style={Styles.headertxt}>Wallet  <Down name='caretdown' color={'#000'} size={16} /></Text> */}
        </View>
        <TouchableOpacity
          style={Styles.imgConatainer}
          onPress={() => {
            navigation.navigate('notifications');
          }}>
          {/* <User name='user-circle-o' color={'#000'} size={30} /> */}
          <Notification name="notifications-sharp" size={26} color={'#fff'} />
        </TouchableOpacity>
      </View>
      <View style={{padding: 10, backgroundColor: '#E9E9E9'}}>
        <FlatList
          // style={styles.listContainer}
          data={Categories}
          numColumns={2}
          keyExtractor={(item, index) => item.toString()}
          renderItem={data => (
            <View style={{paddingLeft: 10}}>
              <TouchableOpacity
                style={Styles.flatContainer}
                onPress={data.item.onPress}>
                <View style={Styles.imgContainer}>
                  <Image source={data.item.image} style={Styles.imgStyles} />
                </View>
                <Text style={Styles.title}>{data.item.title}</Text>
              </TouchableOpacity>
            </View>
          )}
        />
        <View style={{alignSelf: 'center'}}>
          <BarChart
            style={Styles.graphStyle}
            data={data}
            width={width - 25}
            height={220}
            yAxisLabel="$"
            chartConfig={chartConfig}
            verticalLabelRotation={10}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
