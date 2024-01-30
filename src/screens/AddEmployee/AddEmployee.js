import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Alert,
  StatusBar,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Menu from 'react-native-vector-icons/AntDesign';
import Batch from 'react-native-vector-icons/Octicons';
import Roles from 'react-native-vector-icons/MaterialCommunityIcons';
import Depart from 'react-native-vector-icons/MaterialIcons';
import Pose from 'react-native-vector-icons/AntDesign';
import User from 'react-native-vector-icons/FontAwesome';
import Lock from 'react-native-vector-icons/AntDesign';
import Mail from 'react-native-vector-icons/AntDesign';
import Down from 'react-native-vector-icons/AntDesign';
import Phones from 'react-native-vector-icons/Feather';
import EyeOn from 'react-native-vector-icons/Feather';
import EyeOff from 'react-native-vector-icons/Feather';
import Toast from 'react-native-simple-toast';
import {useSelector, useDispatch} from 'react-redux';
import {
  createEmployeeFun,
  getEmployeeSelectedFun,
  getdepartmentFun,
  getdevisionFun,
  getpositionFun,
  updateEmployeeFun,
  getroleFun,
} from '../../slices/all/employees/thunk';
import {useFormik, Formik} from 'formik';
import Styles from './AddEmployeeStyles';
import {ActivityIndicator} from 'react-native-paper';
const AddEmployee = ({navigation}) => {
  const [isLoading, setLoading] = useState(true);
  const [roleTypes, setroleTypes] = useState('');
  const [divisionTypes, setdivisionTypes] = useState('');
  const [dList, setdList] = useState(false);
  const [roleList, setroleList] = useState(false);
  const [departmentType, setdepartmentType] = useState('');
  const [departmentList, setdepartmentList] = useState(false);
  const [positionType, setpositionType] = useState('');
  const [positionList, setpositionList] = useState(false);
  //   const onRefresh = React.useCallback(() => {
  //     setRefreshing(true);
  //     setTimeout(() => {
  //       setRefreshing(false);
  //     }, 2500);
  //   }, [getData]);
  // const apicall = async () => {
  //   setloader(true);
  //   var data = {
  //     Contact_Person_Name: userName,
  //     Contact_Number: phone,
  //     Company_Name: companyName,
  //     Email: email,
  //     Message: message,
  //     Branch_Location: locationName,
  //     Brand: brandName,
  //   };
  //   var cate = await api.postapi(data, 'Enquiry');
  //   if (cate && cate.Company_Name) {
  //     setloader(false);
  //     Toast.showWithGravity('Enquiry sent successfully', Toast.LONG, Toast.TOP);
  //     props.navigation.goBack();
  //     // console.log(cate);
  //   } else {
  //     setloader(false);
  //     Toast.showWithGravity(
  //       'Something went wrong please try again later',
  //       Toast.LONG,
  //       Toast.TOP,
  //     );
  //   }
  // };
  // const submitForm = () => {
  //   const strongRegex = new RegExp(
  //     '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$',
  //   );
  //   var done = true;
  //   if (locationName == '') {
  //     setlocationerror('please select the location');
  //     done = false;
  //   }
  //   // if (locationName != "") {
  //   //   setlocationName(locationName);
  //   //   setlocationerror(null);
  //   // }
  //   if (brandName == '') {
  //     setbranderror('please select the brand');
  //     done = false;
  //   }
  //   if (userName == '') {
  //     setusernameerror('please fill the person name');
  //     done = false;
  //   }
  //   if (phone == '') {
  //     setphoneerror('please fill the phone number');
  //     done = false;
  //   }
  //   if (companyName == '') {
  //     setcompanyerror('please fill the company name');
  //     done = false;
  //   }
  //   if (!strongRegex.test(email) == true) {
  //     setemailerror('please fill correct email address');
  //     return false;
  //   }
  //   if (email == '') {
  //     setemailerror('please fill the email');
  //     done = false;
  //   }
  //   if (message == '') {
  //     setmessageerror('please fill the messege field');
  //     done = false;
  //   }
  //   if (done) {
  //     apicall();
  //   } else {
  //     Toast.showWithGravity(
  //       'please fill all required details',
  //       Toast.LONG,
  //       Toast.TOP,
  //     );
  //   }
  //   Keyboard.dismiss();
  // };

  const sendPress = () => {
    navigation.goBack();
    z;
    Toast.showWithGravity('Date selected', Toast.LONG, Toast.BOTTOM);
  };
  const dispatch = useDispatch();
  const {
    user,
    data,
    employee,
    error,
    loading,
    errorMsg,
    department,
    devision,
    position,
    roles,
  } = useSelector(state => ({
    user: state.Login.user,
    data: state.Employees.data,
    employee: state.Employees.employee,
    department: state.Employees.department,
    devision: state.Employees.devision,
    position: state.Employees.position,
    roles: state.Employees.roles,
  }));
  const [id, setid] = useState(null);
  const getuserdata = async id => {
    var userdata = await getEmployeeSelectedFun(id);
    validation.setValues({
      firstname: userdata.firstname,
      lastname: userdata.lastname,
      email: userdata.email,
      phone: userdata.phone,
      countrycodes: '+91',
      employee_id: userdata.employee_id,
      password: userdata.password,
      devision: userdata.devision,
      departmentId: userdata.departmentId,
      positionId: userdata.positionId,
      roleId: userdata.roleId,
    });
  };
  useEffect(() => {
    // if (props.router.params && props.router.params.id) {
    //   setid(props.router.params.id);
    //   getuserdata(props.router.params.id);
    // }
    dispatch(getdevisionFun());
    dispatch(getdepartmentFun());
    dispatch(getpositionFun());
    dispatch(getroleFun());
  }, []);
  useEffect(() => {
    console.log('role list', roles);
    console.log('devision list', devision);
    console.log('department list', department);
  }, [roles, devision, department]);

  return (
    <View style={Styles.mainContainer}>
      <StatusBar backgroundColor={'#0c7ec4'} />
      <View style={Styles.mainBody}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Menu name="arrowleft" color={'#fff'} size={26} />
        </TouchableOpacity>
        <View style={{paddingHorizontal: 80}}>
          <Text style={[Styles.lable1, {color: '#fff'}]}>Add Employee</Text>
        </View>
      </View>
      <Formik
        initialValues={{
          firstname: '',
          lastname: '',
          email: '',
          phone: '',
          countrycodes: '+91',
          employee_id: '',
          password: '',
          departmentId: departmentType ? departmentType : 'Select Department',
          positionId: null,
          roleId: roleTypes ? roleTypes : 'Select Role',
          devision: divisionTypes ? divisionTypes : 'Select Division',
        }}
        enableReinitialize={true}
        onSubmit={async (values, action) => {
          console.log('VALUES', values);
          values.phone = values.phone.toString();
          if (id) {
            var d = {
              id: id,
              firstname: values.firstname,
              lastname: values.lastname,
              email: values.email,
              phone: values.phone,
              countrycodes: values.countrycodes,
              employee_id: values.employee_id,
              devision: values.devision,
              departmentId: values.departmentId,
              positionId: values.positionId,
              roleId: values.roleId,
            };
            // dispatch(updateEmployeeFun(d, navigation.navigate));
          } else {
            // dispatch(createEmployeeFun(values, navigation.navigate));
          }
        }}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          isValid,
        }) => {
          return (
            <>
              <ScrollView
                style={Styles.mainInputContainer}
                scrollEnabled={true}>
                <View style={Styles.boxContainer}>
                  <Text style={Styles.lable}>Fill Employee Details</Text>
                  <View style={{padding: 10}}>
                    <View>
                      <User
                        name="user-o"
                        color={'black'}
                        size={22}
                        style={Styles.iconCalender}
                      />
                      <TextInput
                        placeholder="First Name"
                        placeholderTextColor={'gray'}
                        onChangeText={handleChange('firstname')}
                        value={values.firstname}
                        invalid={
                          touched.firstname && errors.firstname ? true : false
                        }
                        style={Styles.InputContainer}
                      />
                    </View>
                    <View>
                      <User
                        name="user-o"
                        color={'black'}
                        size={22}
                        style={Styles.iconCalender}
                      />
                      <TextInput
                        placeholder="Last name"
                        placeholderTextColor={'gray'}
                        onChangeText={handleChange('lastname')}
                        value={values.lastname}
                        invalid={
                          touched.lastname && errors.lastname ? true : false
                        }
                        style={Styles.InputContainer}
                      />
                    </View>
                    <View>
                      <Mail
                        name="mail"
                        color={'black'}
                        size={22}
                        style={Styles.iconCalender}
                      />
                      <TextInput
                        placeholder="Email"
                        placeholderTextColor={'gray'}
                        onChangeText={handleChange('email')}
                        keyboardType="email-address"
                        value={values.email}
                        invalid={touched.email && errors.email ? true : false}
                        style={Styles.InputContainer}
                      />
                    </View>
                    <View>
                      <Phones
                        name="phone"
                        color={'black'}
                        size={22}
                        style={Styles.iconCalender}
                      />
                      <TextInput
                        placeholder="Phone Number"
                        placeholderTextColor={'gray'}
                        keyboardType="number-pad"
                        onChangeText={handleChange('phone')}
                        value={values.phone}
                        maxLength={10}
                        invalid={touched.phone && errors.phone ? true : false}
                        style={Styles.InputContainer}
                      />
                    </View>
                    <View>
                      <Mail
                        name="idcard"
                        color={'black'}
                        size={22}
                        style={Styles.iconCalender}
                      />
                      <TextInput
                        placeholder="Employee ID"
                        placeholderTextColor={'gray'}
                        keyboardType="number-pad"
                        onChangeText={handleChange('employee_id')}
                        maxLength={8}
                        value={values.employee_id}
                        invalid={
                          touched.employee_id && errors.employee_id
                            ? true
                            : false
                        }
                        style={Styles.InputContainer}
                      />
                    </View>
                    <View>
                      <Batch
                        name="organization"
                        color={'black'}
                        size={22}
                        style={Styles.iconCalender}
                      />
                      <TextInput
                        placeholder="Division"
                        placeholderTextColor={'gray'}
                        onChangeText={handleChange('devision')}
                        value={values.devision}
                        editable={false}
                        invalid={
                          touched.devision && errors.devision ? true : false
                        }
                        style={Styles.InputContainer}
                      />
                      <TouchableOpacity
                        onPress={() => setdList(true)}
                        style={Styles.icon}>
                        <View style={Styles.dropdownContainer}>
                          {!dList ? (
                            <Down name="down" color={'black'} size={22} />
                          ) : (
                            <Down name="up" color={'black'} size={22} />
                          )}
                        </View>
                      </TouchableOpacity>
                    </View>
                    {dList ? (
                      <View style={Styles.payStyles}>
                        {devision.map((item, i) => {
                          return (
                            <ScrollView key={item} scrollEnabled={true}>
                              <TouchableOpacity
                                onPress={() => {
                                  setdivisionTypes(item.devisionname);
                                  setdList(false);
                                  console.log(item.devisionname);
                                }}
                                style={Styles.touchStyles}>
                                <Text style={Styles.textitemStyles}>
                                  {item.devisionname}
                                </Text>
                              </TouchableOpacity>
                            </ScrollView>
                          );
                        })}
                      </View>
                    ) : null}

                    <View>
                      <Roles
                        name="account-details-outline"
                        color={'black'}
                        size={22}
                        style={Styles.iconCalender}
                      />
                      <TextInput
                        placeholder="Role"
                        placeholderTextColor={'gray'}
                        keyboardType="number-pad"
                        onChangeText={handleChange('roleId')}
                        value={values.roleId}
                        editable={false}
                        invalid={touched.roleId && errors.roleId ? true : false}
                        style={Styles.InputContainer}
                      />
                      <TouchableOpacity
                        onPress={() => setroleList(true)}
                        style={Styles.icon}>
                        <View style={Styles.dropdownContainer}>
                          {!roleList ? (
                            <Down name="down" color={'black'} size={22} />
                          ) : (
                            <Down name="up" color={'black'} size={22} />
                          )}
                        </View>
                      </TouchableOpacity>
                    </View>
                    {roleList ? (
                      <View style={Styles.payStyles}>
                        {roles.map((item, i) => {
                          return (
                            <ScrollView key={item} scrollEnabled={true}>
                              <TouchableOpacity
                                onPress={() => {
                                  setroleTypes(item.rolename);
                                  setroleList(false);
                                  console.log(item.rolename);
                                }}
                                style={Styles.touchStyles}>
                                <Text style={Styles.textitemStyles}>
                                  {item.rolename}
                                </Text>
                              </TouchableOpacity>
                            </ScrollView>
                          );
                        })}
                      </View>
                    ) : null}
                    <View>
                      <Depart
                        name="subject"
                        size={22}
                        color={'#000'}
                        style={Styles.iconCalender}
                      />
                      <TextInput
                        placeholder="Departments"
                        placeholderTextColor={'gray'}
                        keyboardType="number-pad"
                        onChangeText={handleChange('departmentId')}
                        value={values.departmentId}
                        invalid={
                          touched.departmentId && errors.departmentId
                            ? true
                            : false
                        }
                        style={Styles.InputContainer}
                      />
                      <TouchableOpacity
                        onPress={() => setdepartmentList(true)}
                        style={Styles.icon}>
                        <View style={Styles.dropdownContainer}>
                          {!departmentList ? (
                            <Down name="down" color={'black'} size={22} />
                          ) : (
                            <Down name="up" color={'black'} size={22} />
                          )}
                        </View>
                      </TouchableOpacity>
                    </View>
                    {departmentList ? (
                      <View style={Styles.payStyles}>
                        {department.map((item, i) => {
                          return (
                            <ScrollView key={item} scrollEnabled={true}>
                              <TouchableOpacity
                                onPress={() => {
                                  setdepartmentType(item.departmentname);
                                  setdepartmentList(false);
                                  console.log(item.departmentname);
                                }}
                                style={Styles.touchStyles}>
                                <Text style={Styles.textitemStyles}>
                                  {item.departmentname}
                                </Text>
                              </TouchableOpacity>
                            </ScrollView>
                          );
                        })}
                      </View>
                    ) : null}
                    <View>
                      <Pose
                        name="switcher"
                        size={20}
                        color={'#000'}
                        style={Styles.iconCalender}
                      />
                      <TextInput
                        placeholder="Position"
                        placeholderTextColor={'gray'}
                        keyboardType="number-pad"
                        onChangeText={handleChange('positionId')}
                        value={values.positionId}
                        invalid={
                          touched.positionId && errors.positionId ? true : false
                        }
                        style={Styles.InputContainer}
                      />
                    </View>
                    <View>
                      <Lock
                        name="lock1"
                        size={24}
                        color={'#000'}
                        style={Styles.iconCalender}
                      />
                      <TextInput
                        placeholder="Password"
                        placeholderTextColor={'gray'}
                        keyboardType="number-pad"
                        onChangeText={handleChange('password')}
                        value={values.password}
                        invalid={
                          touched.password && errors.password ? true : false
                        }
                        style={Styles.InputContainer}
                      />
                      <EyeOn
                        name="eye"
                        size={22}
                        color={'gray'}
                        style={Styles.eyeStyle}
                      />
                    </View>
                  </View>
                </View>
              </ScrollView>
              <TouchableOpacity
                style={Styles.SaveContainer}
                onPress={handleSubmit}>
                <Text style={Styles.saveText}>Send Request</Text>
              </TouchableOpacity>
            </>
          );
        }}
      </Formik>
    </View>
  );
};

export default AddEmployee;
const {width, height} = Dimensions.get('window');
