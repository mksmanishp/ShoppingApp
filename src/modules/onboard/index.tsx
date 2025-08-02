import { Image, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { Colors, screenHeight, screenWidth } from '@utils/Constants';
import Animated, { FadeInDown } from 'react-native-reanimated';
import CustomText from '@components/global/CustomText';
import { resetAndNavigate } from '@utils/NavigationUtil';

const Splash = () => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      resetAndNavigate('Home');
    }, 3000);
    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <View style={styles.container}>
      <Image
        source={require('@assets/images/logo_t.png')}
        style={styles.image}
      ></Image>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
  },
  image: {
    width: screenWidth * 0.35,
    height: screenWidth * 0.35,
    resizeMode: 'contain',
  },
  msgText: {
    textAlign: 'center',
  },
  treeImage: {
    width: screenWidth * 0.4,
    height: screenHeight * 0.14,
    resizeMode: 'contain',
  },
  animatedContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
});
