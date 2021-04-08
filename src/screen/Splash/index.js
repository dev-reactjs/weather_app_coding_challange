import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FONT_FAMILIES } from '../../assets/fonts';
import Colors from '../../config/Colors';

const Splash = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.testColor}>WeatherApp</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White,
    alignItems: "center",
    justifyContent: "center"
  },
  testColor: {
    color: Colors.Primary,
    fontFamily: FONT_FAMILIES.CORBEL_B,
    fontSize: 34,
    fontWeight: "700"
  }
});
export default Splash;
