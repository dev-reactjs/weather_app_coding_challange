import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { FONT_FAMILIES } from '../../assets/fonts';
import Colors from '../../config/Colors';
import CommonHelper from '../../screen/utils';
import { backIcon } from "./../../assets/icon";
const Helper = new CommonHelper();

const Header = ({ back = true }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>WeatherApp</Text>
      {back ? <TouchableOpacity onPress={() => Helper.goBack()} style={styles.backContainer}>
        <Image source={backIcon} />
      </TouchableOpacity> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { height: 64, width: "100%", backgroundColor: Colors.Primary, alignItems: "center", justifyContent: "center" },
  heading: { color: Colors.White, fontSize: 24, fontWeight: "500", fontFamily: FONT_FAMILIES.CORBEL},
  backContainer: { position: "absolute", left: 10 },
  back: { color: Colors.White, fontWeight: "900" }
});

export default Header;

