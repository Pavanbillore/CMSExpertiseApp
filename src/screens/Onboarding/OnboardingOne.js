import * as React from 'react';
import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import SwiperFlatList from 'react-native-swiper-flatlist';
import Styles from './OnboardingStyles';
const OnboardingOne = ({navigation}) => {
  // const img1 = require('../assets/images/wallet.png');
  // const img2 = require('../assets/images/lockers.png');
  // const img3 = require('../assets/images/reportcard.png');
  const images = [
    {
      image: require('../../assets/images/wallet.png'),
      title: 'Easy Wallet Control',
      sub_title: 'Create wallets and easily to manage your cash flow.',
    },
    {
      image: require('../../assets/images/lockers.png'),
      title: 'Cash View Convenient',
      sub_title:
        'You can capture income & expense most visualy with categories, time.',
    },
    {
      image: require('../../assets/images/reportcard.png'),
      title: 'Expense Report',
      sub_title:
        'Review and manage your income & expense by category, time easy and quickly. app is help you  balance the expense and saving money.',
    },
  ];
  return (
    <SafeAreaView style={Styles.mainContainer}>
      <TouchableOpacity
        style={Styles.btnContainer}
        onPress={() => {
          navigation.navigate('sign-in');
        }}>
        <Text style={[Styles.txtContainer, {fontFamily: 'sans-serif'}]}>
          Skip
        </Text>
      </TouchableOpacity>
      <View>
        {images.length > 0 ? (
          <SwiperFlatList
            index={0}
            autoplay
            autoplayDelay={3}
            autoplayLoop
            autoplayLoopKeepAnimation
            data={images}
            onChangeIndex={({index}) => {
              index + 1;
            }}
            renderItem={({item}) => (
              <View>
                <View style={Styles.imgViewContainer}>
                  <Image
                    source={item.image}
                    style={Styles.flatimg}
                    resizeMode={'contain'}
                  />
                </View>

                <View style={Styles.modalContainer}>
                  <View>
                    <Text style={[Styles.wallettxt, {fontFamily: 'LatoBlack'}]}>
                      {item.title}
                    </Text>
                    <Text style={Styles.wallettxt2}>{item.sub_title}</Text>
                  </View>
                  <TouchableOpacity
                    style={Styles.btnContainer2}
                    onPress={() => {
                      navigation.navigate('sign-in');
                    }}>
                    <Text style={Styles.Gettxt}>GET STARTED</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
        ) : null}
      </View>
    </SafeAreaView>
  );
};

export default OnboardingOne;
