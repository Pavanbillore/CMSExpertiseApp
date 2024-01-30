import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  StatusBar,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Styles from './OverViewStyles';
import Noti from 'react-native-vector-icons/FontAwesome';
import Right from 'react-native-vector-icons/AntDesign';
import Verify from 'react-native-vector-icons/Foundation';
import Clock from 'react-native-vector-icons/Ionicons';
import Toast from 'react-native-simple-toast';
import {BarChart} from 'react-native-chart-kit';
const Overview = ({navigation}) => {
  const [isLoading, setLoading] = useState(false);
  const [creditlist, setCreditlist] = useState(false);
  const [debitlist, setDebitlist] = useState(false);
  const [balancelist, setbalancelist] = useState(false);
  const [employeelist, setEmployeelist] = useState(true);
  const [refreshing, setRefreshing] = React.useState(false);
  const [data, setData] = useState([]);
  const {width, height} = Dimensions.get('window');
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

  useEffect(() => {}, [onRefresh]);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2500);
  }, []);
  const dashboardData = [
    {
      id: '0',
      pick: require('../../../assets/images/usergreen.png'),
      name: 'TOTAL CREDIT',
      title: '525K',
      text: 'View all transaction',
      icons: require('../../../assets/images/uptir.png'),
      Styles: Styles.pageStyles,
      onPress: (onPress = () => {
        setEmployeelist(false);
        setDebitlist(false);
        setCreditlist(true);
      }),
    },
    {
      id: '1',
      name: 'TOTAL DEBIT',
      pick: require('../../../assets/images/redMoney.png'),
      title: '368K',
      text: 'View all transaction',
      icons: require('../../../assets/images/bottomright.png'),
      Styles: Styles.pageStyles2,

      onPress: (onPress = () => {
        setEmployeelist(false);
        setCreditlist(false);
        setDebitlist(true);
      }),
    },
    // {
    //   id: '2',
    //   name: 'MY BALANCE',
    //   pick: require('../../../assets/images/blurBag.png'),
    //   title: '165K',
    //   text: 'Withdraw money',
    //   amount: '+0.00',
    //   style: {
    // backgroundColor: '#f5f2f2',
    // width: '50%',
    // height: 110,
    // margin: 1,
    // justifyContent: 'center',
    // borderColor: 'grey',
    // borderRadius: 11,
    //   },
    //   onPress: (onPress = () => {
    //     setEmployeelist(false);
    //     setbalancelist(true);
    //   }),
    // },
  ];
  const SuppliersData = [
    {
      id: '0',
      pick: require('../../../assets/images/profile.png'),
      name: 'Curve Systems',
      title: 'Mr. Gopal Rajput',
      service: 'IT Services',
      weeks: '5',
    },
    {
      id: '1',
      name: 'Digitech Galaxy',
      pick: require('../../../assets/images/profile.png'),
      title: 'John Roberts',
      service: 'Watches',
      weeks: '895',
    },
    {
      id: '2',
      name: 'Nesta Technologies',
      pick: require('../../../assets/images/profile.png'),
      title: 'Harley Fuller',
      service: 'Bike Accessories',
      weeks: '3470',
    },
    {
      id: '3',
      name: 'Zoetic Fashion',
      pick: require('../../../assets/images/profile.png'),
      title: 'James Bowen',
      service: 'Clothes',
      weeks: '5488',
    },
    {
      id: '4',
      name: 'Meta4Systems',
      pick: require('../../../assets/images/profile.png'),
      title: 'Zoe Dennis',
      service: 'Furniture',
      weeks: '4100',
    },
  ];
  const dat = {
    datasets: [
      {
        data: ['5', '3', '4', '0'],
      },
    ],
  };
  const chartConfig = {
    backgroundGradientFrom: '#fff',
    backgroundGradientFromOpacity: 1,
    backgroundGradientTo: '#fff',
    backgroundGradientToOpacity: 1,
    color: () => '#EF7F1A',
    strokeWidth: 2,
    barPercentage: 2,
    propsForLabels: {
      fontSize: '11',
    },
    fillShadowGradient: '#4968FB',
    fillShadowGradientOpacity: 1,
  };

  return (
    <View>
      <StatusBar backgroundColor={'#0c7ec4'} />
      <View style={Styles.mainContainer}>
        <View style={Styles.mainBody}>
          <View style={Styles.s1}>
            <View style={Styles.pageStyles3}>
              <View style={{alignSelf: 'center'}}>
                <View style={Styles.pageStyles4}>
                  <Text style={Styles.flatText}>MY BALANCE</Text>
                  <Text style={[Styles.flatText, Styles.blStyles]}>+0.00</Text>
                </View>
                <Text style={Styles.flatText2}>165K</Text>
              </View>
              <View style={Styles.pageStyle5}>
                <View>
                  <TouchableOpacity
                    onPress={() => {
                      setEmployeelist(false);
                      setbalancelist(true);
                    }}>
                    <Text style={Styles.flatText3}>Withdraw money</Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <Image
                    source={require('../../../assets/images/blurBag.png')}
                    resizeMode="contain"
                    style={Styles.imgStyle1}
                  />
                </View>
              </View>
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
                <View style={Styles.pageStyle6}>
                  <View style={item.Styles}>
                    <View style={Styles.pageStyle8}>
                      <View style={Styles.pageStyle7}>
                        <Text style={Styles.flatText}>{item.name}</Text>
                        <Image
                          source={item.icons}
                          resizeMode="contain"
                          style={Styles.pageStyle9}
                        />
                      </View>
                      <Text style={Styles.flatText2}>{item.title}</Text>
                    </View>
                    <View style={Styles.pageStyle10}>
                      <View>
                        <TouchableOpacity onPress={item.onPress}>
                          <Text style={Styles.flatText3}>{item.text}</Text>
                        </TouchableOpacity>
                      </View>
                      <View>
                        <Image
                          source={item.pick}
                          resizeMode="contain"
                          style={Styles.imgStyles2}
                        />
                      </View>
                    </View>
                  </View>
                </View>
              )}
            />
          </View>
        </View>
      </View>

      {creditlist ? (
        <View style={Styles.pageStyle11}>
          <Text style={Styles.lable2}>TOTAL CREDIT</Text>
          <FlatList
            scrollEnabled={true}
            keyExtractor={item => item.id.toString()}
            data={SuppliersData}
            renderItem={({item}) => (
              <View style={Styles.pageStyle12}>
                <View style={Styles.flatContainertop}>
                  <View style={Styles.pageStyle13}>
                    <View>
                      <Image source={item.pick} style={Styles.mouseIconStyle} />
                    </View>
                    <View style={{paddingLeft: 20}}>
                      <Text style={Styles.flatText5}>{item.name}</Text>
                      <Text style={Styles.flattitle}>{item.title}</Text>
                      <Text style={[Styles.flattitle2, Styles.pageStyle14]}>
                        {item.service}
                      </Text>
                    </View>
                  </View>
                  <View style={Styles.pageStyle15}>
                    <Clock
                      name="timer"
                      size={22}
                      color={'#F1656E'}
                      style={Styles.clockStyles}
                    />
                    <Text style={[Styles.flatText5, Styles.pageStyle16]}>
                      {item.weeks} Week
                    </Text>
                  </View>
                  <View style={Styles.pageStyle17}>
                    <Verify
                      name="graph-bar"
                      size={25}
                      color={'#5BD288'}
                      style={Styles.verifyStyles}
                    />
                    <Text style={[Styles.flattitle2, Styles.pageStyle18]}>
                      32%
                    </Text>
                  </View>
                </View>
              </View>
            )}
          />
        </View>
      ) : null}
      {debitlist ? (
        <View style={Styles.pageStyle19}>
          <Text style={Styles.lable2}>TOTAL DEBIT</Text>
          <FlatList
            scrollEnabled={true}
            keyExtractor={item => item.id.toString()}
            data={SuppliersData}
            renderItem={({item}) => (
              <View style={Styles.pageStyle20}>
                <View style={Styles.flatContainertop}>
                  <View style={Styles.pageStyle21}>
                    <View>
                      <Image source={item.pick} style={Styles.mouseIconStyle} />
                    </View>
                    <View style={{paddingLeft: 20}}>
                      <Text style={Styles.flatText5}>{item.name}</Text>
                      <Text style={Styles.flattitle}>{item.title}</Text>
                      <Text style={[Styles.flattitle2, Styles.pageStyle22]}>
                        {item.service}
                      </Text>
                    </View>
                  </View>
                  <View style={Styles.pageStyle23}>
                    <Clock
                      name="timer"
                      size={22}
                      color={'#F1656E'}
                      style={Styles.cl1}
                    />
                    <Text style={[Styles.flatText5, Styles.pageStyle24]}>
                      {item.weeks} Week
                    </Text>
                  </View>
                  <View style={Styles.pageStyle25}>
                    <Verify
                      name="graph-bar"
                      size={25}
                      color={'#5BD288'}
                      style={{paddingHorizontal: 10}}
                    />
                    <Text style={[Styles.flattitle2, Styles.pageStyle26]}>
                      32%
                    </Text>
                  </View>
                </View>
              </View>
            )}
          />
        </View>
      ) : null}
      {balancelist ? (
        <View style={Styles.pageStyle27}>
          <Text style={Styles.lable2}>MY BALANCE</Text>
          <FlatList
            scrollEnabled={true}
            keyExtractor={item => item.id.toString()}
            data={SuppliersData}
            renderItem={({item}) => (
              <View style={Styles.pageStyle28}>
                <View style={Styles.flatContainertop}>
                  <View style={Styles.pageStyle29}>
                    <View>
                      <Image source={item.pick} style={Styles.mouseIconStyle} />
                    </View>
                    <View style={{paddingLeft: 20}}>
                      <Text style={Styles.flatText5}>{item.name}</Text>
                      <Text style={Styles.flattitle}>{item.title}</Text>
                      <Text style={[Styles.flattitle2, Styles.pageStyle30]}>
                        {item.service}
                      </Text>
                    </View>
                  </View>
                  <View style={Styles.pageStyle31}>
                    <Clock
                      name="timer"
                      size={22}
                      color={'#F1656E'}
                      style={Styles.c1}
                    />
                    <Text style={[Styles.flatText5, Styles.pageStyle32]}>
                      {item.weeks} Week
                    </Text>
                  </View>
                  <View style={Styles.pageStyle33}>
                    <Verify
                      name="graph-bar"
                      size={25}
                      color={'#5BD288'}
                      style={Styles.c22}
                    />
                    <Text style={[Styles.flattitle2, Styles.pageStyle34]}>
                      32%
                    </Text>
                  </View>
                </View>
              </View>
            )}
          />
        </View>
      ) : null}
      {employeelist ? (
        <View style={Styles.c23}>
          <Text style={Styles.lable2}>Employee Forecast</Text>
          <View style={Styles.c24}>
            <View style={Styles.flatContainerhome}>
              <BarChart
                style={Styles.graphStyle}
                data={dat}
                width={width - 20}
                height={250}
                yAxisLabel="SAR "
                yLabelsOffset={5}
                xLabelsOffset={5}
                chartConfig={chartConfig}
                verticalLabelRotation={1}
                withInnerLines={false}
                showBarTops={false}
              />
            </View>
          </View>
        </View>
      ) : null}
      <View style={Styles.threeBoxStyles}>
        <TouchableOpacity style={Styles.btnClickStyles}>
          <Text style={Styles.txtBarStyles}>BALANCE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[Styles.btnClickStyles, {backgroundColor: '#4E74D7'}]}>
          <Text style={Styles.txtBarStyles}>EXPANCES</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[Styles.btnClickStyles, {backgroundColor: '#4ABBBA'}]}>
          <Text style={Styles.txtBarStyles}>RECIEVE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Overview;
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({});
