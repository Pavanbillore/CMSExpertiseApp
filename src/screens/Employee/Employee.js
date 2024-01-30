import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Back from 'react-native-vector-icons/AntDesign';
import Plus from 'react-native-vector-icons/Entypo';
import EyeIcon from 'react-native-vector-icons/AntDesign';
import Styles from './EmployeeStyles';
import {useDispatch, useSelector} from 'react-redux';
import {getEmployeeFun, getEmployeeSelectedFun} from '../../slices/thunks';
const Employee = ({navigation}) => {
  const {data, devision} = useSelector(state => ({
    data: state.Employees.data,
    devision: state.Employees.devision,
  }));
  const [Loading, setLoading] = useState(false);
  const [detailsEmployee, setdetailsEmployee] = React.useState(null);
  const Avatar = require('../../assets/images/avatar.jpg');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEmployeeFun());
  }, []);
  const getdetail = async id => {
    // setLoading(true);
    var details = await getEmployeeSelectedFun(id);
    if (details) {
      setdetailsEmployee(details);
      // setLoading(false);
    } else {
      console.log('something went wrong');
    }
  };
  useEffect(() => {
    // setLoading(false);
    console.log(data[3]);
  }, [data]);
  const formatter = new Intl.DateTimeFormat('en-GB', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
  const {width, height} = Dimensions.get('window');
  return (
    <SafeAreaView style={Styles.mainContainer}>
      <StatusBar backgroundColor={'#0c7ec4'} />
      <View style={Styles.headerView}>
        <TouchableOpacity
          style={Styles.btnContainer}
          onPress={() => {
            navigation.goBack();
          }}>
          <Back name="arrowleft" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={Styles.ftTxt}>Employee List</Text>
        <TouchableOpacity
          style={Styles.container16}
          onPress={() => {
            navigation.navigate('add-employee');
          }}>
          <Plus name="plus" size={28} color="#fff" />
        </TouchableOpacity>
      </View>
      {Loading ? (
        <View style={Styles.container17}>
          <ActivityIndicator size="large" color="#000" />
        </View>
      ) : (
        <View style={Styles.container18}>
          <FlatList
            showsVerticalScrollIndicator={true}
            scrollEnabled={true}
            keyExtractor={item => item.id.toString()}
            data={data}
            renderItem={({item}) => (
              <View style={Styles.container14}>
                <View style={Styles.flatContainer}>
                  <View>
                    <View style={Styles.viewStyles1}>
                      <View>
                        <Image source={Avatar} style={Styles.pickStyle} />
                      </View>
                      <View style={Styles.container9}>
                        <Text style={[Styles.flatText2, Styles.container15]}>
                          {item.firstname + ' ' + item.lastname}
                        </Text>
                        <Text style={[Styles.flatText2, {color: 'red'}]}>
                          {item.department
                            ? item.department.departmentname
                            : 'Admin'}
                        </Text>
                      </View>
                    </View>
                    <View style={Styles.container19}>
                      <View style={Styles.container20}>
                        <Text style={Styles.flatText}>Employee ID - </Text>
                        <Text style={Styles.flatText2}>{item.employee_id}</Text>
                      </View>
                      <View style={Styles.container20}>
                        <Text style={Styles.flatText}>Status - </Text>
                        <Text style={[Styles.flatText2, Styles.container13]}>
                          {item.userstatus}
                        </Text>
                      </View>
                    </View>

                    <View style={Styles.container21}>
                      <View style={Styles.container20}>
                        <Text style={Styles.flatText}>Designation - </Text>
                        <Text style={Styles.flatText2}>
                          {item.role ? item.role.rolename : ''}
                        </Text>
                      </View>
                    </View>
                    <View style={Styles.container22}>
                      <Text style={Styles.flatText}>Phone - </Text>
                      <Text style={Styles.flatText2}>{item.phone}</Text>
                    </View>
                    <View style={Styles.container23}>
                      <View style={Styles.container12}>
                        <Text style={Styles.flatText}>
                          Create Date -
                          <Text style={Styles.flatText2}>
                            {' '}
                            {formatter.format(new Date(item.createdat))}
                          </Text>
                        </Text>
                      </View>
                      <View>
                        <TouchableOpacity
                          onPress={() => {
                            navigation.navigate('employee-view', {
                              employeedata: item,
                            });
                          }}
                          style={Styles.container11}>
                          <Text style={[Styles.flatText, Styles.container10]}>
                            View
                          </Text>
                          <EyeIcon name="arrowright" size={20} color={'#fff'} />
                        </TouchableOpacity>
                      </View>
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

export default Employee;
