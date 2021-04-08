import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { FONT_FAMILIES } from '../../assets/fonts';
import CommonHelper from '../../screen/utils';

const Helper = new CommonHelper();

const SmallCard = ({ type, detail }) => {
  return (
    <TouchableOpacity
      onPress={() => Helper.navigateToPage("MapDetail", { currentCity: detail })}>
      <View style={[styles.row, styles.container]}>
        <View style={[styles.column, styles.halfWidth]}>
          <View style={[styles.row, styles.halfHeight]}>
            <View style={[styles.column, styles.justifyCenter]}>
              <Text style={styles.city}>{detail?.name}</Text>
            </View>
          </View>
          <View style={[styles.row, styles.halfHeight]}>
            <View style={[styles.column, styles.justifyCenter]}>
              <Text style={styles.climate}>{detail?.weather[0]?.main}</Text>
            </View>
          </View>
        </View>
        <View style={[styles.column, styles.justifyCenter, styles.halfWidth]}>
          <Text style={styles.temp}>{`${ (detail?.main?.temp - 273.15).toFixed(2) }°c`}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row"
  },
  column: {
    flexDirection: "column"
  },
  justifyCenter: {
    justifyContent: "center"
  },
  halfWidth: {
    width: "50%"
  },
  halfHeight: {
    height: "50%"
  },
  container: {
    alignSelf: "center", height: 74, width: "90%", borderBottomWidth: 1, borderBottomColor: "#C8C8C8"
  },
  city: { textAlign: "auto", fontSize: 20, fontFamily: FONT_FAMILIES.CORBEL_B },
  climate: { textAlign: "auto", fontSize: 18, fontFamily: FONT_FAMILIES.CORBEL },
  temp: { fontSize: 25, fontWeight: "600", textAlign: "right", fontFamily: FONT_FAMILIES.CORBEL }

});

export default SmallCard;
