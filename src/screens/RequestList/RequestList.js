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
import Back from 'react-native-vector-icons/AntDesign';
import Noti from 'react-native-vector-icons/MaterialIcons';
import Dots from 'react-native-vector-icons/Entypo';
import Styles from './RequestListStyles';
const RequestList = ({navigation}) => {
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
  const [lists, setLists] = useState(false);
  const [listone, setListone] = useState(lists);
  const [listtwo, setListwo] = useState(lists);
  const [listthree, setListthree] = useState(lists);
  const Trasactions = [
    {
      id: '0',
      TransactionID: 'Test',
      curency: 'AED',
      Phone: '123456789',
      PayDate: '12',
      Povalue: '2000',
      amount: '0',
      ramount: '200',
      devision: 'Admin',
      remark: 'Test firsts',
      onPress: id => {
        if (!lists) {
          setLists(true);
        } else {
          setLists(false);
        }
      },
    },
    {
      id: '1',
      TransactionID: 'Test',
      Phone: '123456789',
      curency: 'USA',
      Povalue: '2000',
      amount: '0',
      PayDate: '12',
      ramount: '200',
      devision: 'Admin',
      remark: 'Test firsts',
    },
    {
      id: '2',
      TransactionID: 'Test',
      Phone: '123456789',
      curency: 'USA',
      Povalue: '2000',
      amount: '0',
      PayDate: '12',
      ramount: '200',
      devision: 'Admin',
      remark: 'Test firsts',
    },
  ];
  return (
    <SafeAreaView style={Styles.mainContainer}>
      <View style={Styles.headerView}>
        <TouchableOpacity
          style={Styles.btnContainer}
          onPress={() => {
            navigation.goBack();
          }}>
          <Back name="arrowleft" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={Styles.ftTxt}>Buyer Request List</Text>
        <TouchableOpacity>
          <Noti name="notifications" size={28} color="#fff" />
        </TouchableOpacity>
      </View>
      {isLoading ? (
        <View Styles={Styles.loaderStyles}>
          <ActivityIndicator size="large" color="#000" />
        </View>
      ) : (
        <View style={Styles.vStyles}>
          <FlatList
            showsVerticalScrollIndicator={false}
            scrollEnabled={true}
            keyExtractor={item => item.id.toString()}
            data={Trasactions}
            renderItem={({item}) => (
              <View style={Styles.v2Styles}>
                <View style={Styles.flatContainer}>
                  <View>
                    <View style={Styles.flexStyles}>
                      <Text style={Styles.flatText}>
                        Supplier Name -{' '}
                        <Text style={Styles.flatText2}>
                          {item.TransactionID}
                        </Text>
                      </Text>
                      <TouchableOpacity onPress={item.onPress}>
                        <Dots
                          name="dots-three-horizontal"
                          size={25}
                          color={'#0c7ec4'}
                        />
                      </TouchableOpacity>
                    </View>
                    <View style={Styles.flexStyles}>
                      <Text style={Styles.flatText}>
                        Currency -{' '}
                        <Text style={Styles.flatText2}>{item.curency}</Text>
                      </Text>
                      <Text style={Styles.flatText}>
                        Phone -{' '}
                        <Text style={Styles.flatText2}>{item.Phone}</Text>
                      </Text>
                    </View>

                    <View style={Styles.flexStyles}>
                      <View>
                        <Text style={Styles.flatText}>
                          PO Number -{' '}
                          <Text style={Styles.flatText2}>{item.PayDate}</Text>
                        </Text>
                      </View>
                      <View style={Styles.paddStyles}>
                        <Text style={Styles.flatText}>
                          PO Value -{' '}
                          <Text style={Styles.flatText2}>{item.Povalue}</Text>
                        </Text>
                      </View>
                    </View>

                    <View style={Styles.flexStyles}>
                      <Text style={Styles.flatText}>
                        Amount Paid -{' '}
                        <Text style={Styles.flatText2}>{item.amount}</Text>
                      </Text>
                      <Text style={Styles.flatText}>
                        Amount Requested -{' '}
                        <Text style={Styles.flatText2}>{item.ramount}</Text>
                      </Text>
                    </View>
                    <View style={Styles.flexStyles}>
                      <Text style={Styles.flatText}>
                        Devision -{' '}
                        <Text style={Styles.flatText2}>{item.devision}</Text>
                      </Text>
                      <Text style={Styles.flatText}>
                        Remark -{' '}
                        <Text style={Styles.flatText2}>{item.remark}</Text>
                      </Text>
                    </View>
                  </View>
                  {lists ? (
                    <View style={Styles.listStyles}>
                      <TouchableOpacity style={Styles.listContStyles}>
                        <Text style={[Styles.flatText]}>View Request</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={Styles.touchStyles}>
                        <Text style={[Styles.flatText, Styles.txtStyles]}>
                          Edit
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={Styles.touchStyles2}>
                        <Text style={[Styles.flatText, Styles.txtStyles]}>
                          Pending
                        </Text>
                      </TouchableOpacity>
                    </View>
                  ) : null}
                </View>
              </View>
            )}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default RequestList;
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({});
