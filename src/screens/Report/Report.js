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
import Styles from './ReportStyles';
import Noti from 'react-native-vector-icons/MaterialIcons';
const Report = ({navigation}) => {
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
      TransactionID: '48564546546',
      Phone: '580-464-4694',
      PayDate: '15/06/2023 10:00AM',
    },
    {
      id: '2',
      TransactionID: '48564546546',
      Phone: '580-464-4694',
      PayDate: '16/06/2023 10:00AM',
    },
    {
      id: '3',
      TransactionID: '48564546546',
      Phone: '580-464-4694',
      PayDate: '17/06/2023 10:00AM',
    },
    {
      id: '4',
      TransactionID: '48564546546',
      Phone: '580-464-4694',
      PayDate: '15/06/2023 10:00AM',
    },
    {
      id: '5',
      TransactionID: '48564546546',
      Phone: '580-464-4694',
      PayDate: '15/06/2023 10:00AM',
    },
    {
      id: '6',
      TransactionID: '48564546546',
      Phone: '580-464-4694',
      PayDate: '15/06/2023 10:00AM',
    },
    {
      id: '7',
      TransactionID: '48564546546',
      Phone: '580-464-4694',
      PayDate: '15/06/2023 10:00AM',
    },
    {
      id: '8',
      TransactionID: '48564546546',
      Phone: '580-464-4694',
      PayDate: '15/06/2023 10:00AM',
    },
    {
      id: '9',
      TransactionID: '48564546546',
      Phone: '580-464-4694',
      PayDate: '15/06/2023 10:00AM',
    },
    {
      id: '10',
      TransactionID: '48564546546',
      Phone: '580-464-4694',
      PayDate: '15/06/2023 10:00AM',
    },
    {
      id: '11',
      TransactionID: '48564546546',
      Phone: '580-464-4694',
      PayDate: '15/06/2023 10:00AM',
    },
    {
      id: '12',
      TransactionID: '48564546546',
      Phone: '580-464-4694',
      PayDate: '15/06/2023 10:00AM',
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
        <Text style={Styles.ftTxt}>Transactions List</Text>
        <TouchableOpacity>
          <Noti name="notifications" size={28} color="#fff" />
        </TouchableOpacity>
      </View>
      {isLoading ? (
        <View Styles={Styles.c7}>
          <ActivityIndicator size="large" color="#000" />
        </View>
      ) : (
        <View style={{height: '100%'}}>
          <FlatList
            showsVerticalScrollIndicator={false}
            scrollEnabled={true}
            keyExtractor={item => item.id.toString()}
            data={Trasactions}
            renderItem={({item}) => (
              <View style={Styles.c9}>
                <View style={Styles.flatContainer}>
                  <View>
                    <View style={Styles.c10}>
                      <Text style={Styles.flatText}>Transaction ID - </Text>
                      <Text style={Styles.flatText2}>{item.TransactionID}</Text>
                    </View>
                    <View style={Styles.c8}>
                      <Text style={Styles.flatText}>
                        Phone - {''}
                        <Text style={Styles.flatText2}>{item.Phone}</Text>
                      </Text>
                    </View>
                    <View style={Styles.c8}>
                      <Text style={Styles.flatText}>
                        Date -{' '}
                        <Text style={Styles.flatText2}>{item.PayDate}</Text>
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

export default Report;
const {width, height} = Dimensions.get('window');
