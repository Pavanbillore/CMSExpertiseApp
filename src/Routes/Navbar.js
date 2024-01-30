import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnboardingOne from '../screens/Onboarding/OnboardingOne';
import Profile from '../screens/Profile/Profile';
import Wallet from '../screens/Wallet/Wallet';
import SignIn from '../screens/SignIn/SignIn';
import Report from '../screens/Report/Report';
import SignUp from '../screens/Signup/SignUp';
import ForgotPassword from '../screens/ForgotPassword/ForgotPassword';
import Otp from '../screens/OTP/Otp';
import Header from '../screens/Header/Header';
import DrawerScreen from './Drawer/DrawerScreen';
import BottomTabs from './BottomTabs';
import EditProfile from '../screens/EditProfile/EditProfile';
import RequestForm from '../screens/RequestFrom/RequestForm';
import Cash from '../screens/Cash/Cash';
import Supplier from '../screens/Supplier/Supplier';
import Back from 'react-native-vector-icons/AntDesign';
import MyStatus from '../screens/MyStatus/MyStatus';
import CardRequest from '../screens/CardRequest/CardRequest';
import Employee from '../screens/Employee/Employee';
import AddEmployee from '../screens/AddEmployee/AddEmployee';
import Dashboard from '../screens/Dashboard/Dashboard';
import RaiseRequest from '../screens/RaiseRequest/RaiseRequest';
import RequestList from '../screens/RequestList/RequestList';
import Department from '../screens/Department/Department';
import EmployeeView from '../screens/EmployeeView/EmployeeView';
import OverView from '../screens/EmployeeLists/OverView/OverView';
import Notifications from '../screens/Notifications/Notifications';
import DepartmentHome from '../screens/DepartmentHome/DepartmentHome';
const Navbar = ({navigation}) => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="BottomTabs">
      {/*  <Stack.Screen
        options={{headerShown: false}}
        name="onboarding-screen"
        component={OnboardingOne}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="sign-in"
        component={SignIn}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="sign-up"
        component={SignUp}
    />*/}
      <Stack.Screen name="BottomTabs" component={BottomTabs} />
      <Stack.Screen
        name="home"
        component={BottomTabs}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="forgot-password"
        component={ForgotPassword}
        options={{headerShown: false}}
      />
      <Stack.Screen name="otp" component={Otp} options={{headerShown: false}} />
      {/* <Stack.Screen name="home" component={Home} /> */}
      <Stack.Screen name="profile" component={Profile} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="wallet" component={Wallet} />
      <Stack.Screen
        options={{headerShown: true}}
        name="report"
        component={Report}
      />
      <Stack.Screen name="Header" component={Header} />
      <Stack.Screen name="DrawerScreen" component={DrawerScreen} />
      <Stack.Screen name="request-form" component={RequestForm} />
      <Stack.Screen name="cash" component={Cash} />
      <Stack.Screen
        name="Supplier"
        component={Supplier}
        options={{
          headerShown: true,
          title: 'Supplier Management System',
          headerTitleStyle: {
            color: 'white',
          },
          headerStyle: {
            backgroundColor: '#0c7ec4',
          },
          headerLeft: () => (
            <Back
              name="arrowleft"
              size={25}
              color={'white'}
              style={{
                paddingHorizontal: 20,
                paddingLeft: -20,
              }}
              onPress={() => {
                navigation.goBack();
              }}
            />
          ),
        }}
      />
      <Stack.Screen name="MyStatus" component={MyStatus} />
      <Stack.Screen name="card-request" component={CardRequest} />
      <Stack.Screen name="employee" component={Employee} />
      <Stack.Screen name="add-employee" component={AddEmployee} />
      <Stack.Screen name="dashboard" component={Dashboard} />
      <Stack.Screen name="raise-request" component={RaiseRequest} />
      <Stack.Screen
        name="department-home"
        component={DepartmentHome}
        options={{
          headerShown: true,
          title: 'Upcoming',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: '#fff',
            fontFamily: 'serif',
          },
          headerStyle: {
            backgroundColor: '#000',
          },
          headerLeft: () => (
            <Back
              name="arrowleft"
              size={25}
              color={'white'}
              onPress={() => {
                navigation.goBack();
              }}
            />
          ),
        }}
      />
      <Stack.Screen name="request-list" component={RequestList} />
      <Stack.Screen name="department" component={Department} />
      <Stack.Screen
        name="employee-view"
        component={EmployeeView}
        options={{
          headerShown: true,
          title: 'Employee Details',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: 'white',
          },
          headerStyle: {
            backgroundColor: '#0c7ec4',
          },
          headerLeft: () => (
            <Back
              name="arrowleft"
              size={25}
              color={'white'}
              onPress={() => {
                navigation.goBack();
              }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="notifications"
        component={Notifications}
        options={{
          headerShown: true,
          title: 'Notifications',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: 'white',
          },
          headerStyle: {
            backgroundColor: '#0c7ec4',
          },
          headerLeft: () => (
            <Back
              name="arrowleft"
              size={25}
              color={'white'}
              onPress={() => {
                navigation.goBack();
              }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="overview"
        component={OverView}
        options={{
          headerShown: true,
          title: 'Overview',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: 'white',
          },
          headerStyle: {
            backgroundColor: '#0c7ec4',
          },
          headerLeft: () => (
            <Back
              name="arrowleft"
              size={25}
              color={'white'}
              onPress={() => {
                navigation.goBack();
              }}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default Navbar;
