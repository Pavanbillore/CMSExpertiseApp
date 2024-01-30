import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomTabs from './BottomTabs';
import Navbar from './Navbar';
import DrawerScreen from './Drawer/DrawerScreen';
const Drawer = createDrawerNavigator();
const DrawerTabs = () => {
  const isLoggedIn = true;
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false}}
      drawerContent={props => <DrawerScreen {...props} />}>
      {isLoggedIn ? (
        <Drawer.Screen name="Navbar" component={Navbar} />
      ) : (
        <Drawer.Screen name="BottomTabs" component={BottomTabs} />
      )}
    </Drawer.Navigator>
  );
};

export default DrawerTabs;
