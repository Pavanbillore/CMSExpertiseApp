import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import React from 'react';
import Menu from 'react-native-vector-icons/AntDesign';
import Down from 'react-native-vector-icons/AntDesign';
import User from 'react-native-vector-icons/Ionicons';
import Styles from './MyStatusStyles';
import {Tab, TabView} from 'react-native-elements';
const MyStatus = ({navigation}) => {
  const [index, setIndex] = React.useState(0);
  return (
    <SafeAreaView style={Styles.mainContainer}>
      <View style={Styles.headerContainer}>
        <TouchableOpacity
          style={Styles.menuStyle}
          onPress={() => {
            navigation.goBack();
          }}>
          <Menu name="arrowleft" color={'#fff'} size={28} />
        </TouchableOpacity>
        <View style={Styles.walletConatainer}>
          <TouchableOpacity>
            <Text style={Styles.headertxt}>
              Wallet{' '}
              <Down
                name="caretdown"
                color={'#fff'}
                size={16}
                style={{bottom: 2}}
              />
            </Text>
          </TouchableOpacity>
          <Text style={Styles.wallettxt}>+ $12,500.00</Text>
        </View>
        <TouchableOpacity style={Styles.imgConatainer}>
          <User name="notifications" color={'#fff'} size={30} />
        </TouchableOpacity>
      </View>

      <Tab
        value={index}
        onChange={e => setIndex(e)}
        indicatorStyle={Styles.indiStyles}
        style={Styles.conttabStyles}
        variant="primary">
        <Tab.Item
          title="LAST MONTHS"
          titleStyle={Styles.titleStyless}
          icon={{name: 'timer', type: 'Ionicons', color: 'white'}}
          containerStyle={Styles.conttabStyles}
        />
        <Tab.Item
          title="THIS MONTHS"
          titleStyle={Styles.titleStyless}
          icon={{name: 'sync', type: 'AntDesign', color: 'white'}}
          containerStyle={Styles.conttabStyles}
        />
        <Tab.Item
          title="NEXT MONTHS"
          titleStyle={Styles.titleStyless}
          icon={{
            name: 'queue-play-next',
            type: 'MaterialIcons',
            color: 'white',
          }}
          containerStyle={Styles.contStyles}
        />
      </Tab>

      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={Styles.tabStyles}>
          <Text style={{color: 'black'}}>LAST MONTHS</Text>
        </TabView.Item>
        <TabView.Item style={Styles.tabStyles2}>
          <Text h1>Favorite</Text>
        </TabView.Item>
        <TabView.Item style={Styles.tabStyles3}>
          <Text h1>Cart</Text>
        </TabView.Item>
      </TabView>
    </SafeAreaView>
  );
};

export default MyStatus;
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({});
