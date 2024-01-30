import {Animated, Dimensions, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {SystemBars} from 'react-native-bars';
import RNBootSplash from 'react-native-bootsplash';
import Styles from './SplashScreenStyles';
const SplashScreen = ({navigation}) => {
  const bootSplashLogo = require('../../assets/images/logo.png');
  const [bootSplashIsVisible, setBootSplashIsVisible] = React.useState(true);
  const [bootSplashLogoIsLoaded, setBootSplashLogoIsLoaded] =
    React.useState(false);
  const opacity = React.useRef(new Animated.Value(1));
  const translateY = React.useRef(new Animated.Value(0));

  const init = async () => {
    setTimeout(() => RNBootSplash.hide(), 2000);

    try {
      await RNBootSplash.show();

      Animated.stagger(250, [
        Animated.spring(translateY.current, {
          useNativeDriver: true,
          toValue: -50,
        }),
        Animated.spring(translateY.current, {
          useNativeDriver: true,
          toValue: Dimensions.get('window').height,
        }),
      ]).start();

      Animated.timing(opacity.current, {
        useNativeDriver: true,
        toValue: 0,
        duration: 150,
        delay: 350,
      }).start(() => {
        setTimeout(() => RNBootSplash.hide(), 2000);
        navigation.navigate('onboarding-screen');
        console.log('move');
      });
    } catch (error) {
      setTimeout(() => RNBootSplash.hide(), 2000);
    }
  };

  React.useEffect(() => {
    bootSplashLogoIsLoaded && init();
  }, [bootSplashLogoIsLoaded]);

  return (
    <View style={Styles.container}>
      <SystemBars barStyle="dark-content" />
      {bootSplashIsVisible && (
        <Animated.View
          style={[
            StyleSheet.absoluteFill,
            Styles.bootsplash,
            {opacity: opacity.current},
          ]}>
          <Animated.Image
            source={bootSplashLogo}
            fadeDuration={0}
            resizeMode="contain"
            onLoadEnd={() => setBootSplashLogoIsLoaded(true)}
            style={[
              Styles.logo,
              {transform: [{translateY: translateY.current}]},
            ]}
          />
        </Animated.View>
      )}
    </View>
  );
};

export default SplashScreen;
const styles = StyleSheet.create({});
