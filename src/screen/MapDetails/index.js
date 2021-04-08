import React, {} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import Colors from '../../config/Colors';
import Header from '../../components/Header/Header';
import { FONT_FAMILIES } from '../../assets/fonts';

const MapDetail = ({ route }) => {
  let currentCity = route?.params?.currentCity;
  let latitude = currentCity?.coord?.lat;
  let longitude = currentCity?.coord?.lon;
  return (
    <View style={styles.container}>
      <Header />
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{ flex: 1 }}
        initialRegion={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker coordinate={{
          latitude: latitude,
          longitude: longitude
        }} />
      </MapView>
      <View style={[styles.row, styles.bottomContainer]}>
        <View style={[styles.column, styles.subBottomContainer]} />
        <View style={[styles.column, styles.cityView]}>
          <View style={[styles.column, styles.detailContainer]}>
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>{currentCity?.name}</Text>
          </View>
          <View style={[styles.column, styles.detailList]}>
            <Text style={styles.detailsText}>{currentCity?.weather[0]?.main}</Text>
            <Text style={styles.detailsText}>{`Humidity: ${ currentCity?.main?.humidity }`}</Text>
            <Text style={styles.detailsText}>{`Wind Speed: ${ currentCity?.wind?.speed }`}</Text>
            <Text style={styles.detailsText}>{`Max Temp: ${ (currentCity?.main?.temp_max - 273.15).toFixed(2) }°c`}</Text>
            <Text style={styles.detailsText}>{`Min Temp: ${ (currentCity?.main?.temp_min - 273.15).toFixed(2) }°c`}</Text>
          </View>
        </View>
        <View style={[styles.column, styles.rightBottom]}>
          <View style={[styles.column, styles.subView]}>
            <Text style={styles.temp}>25°c</Text>
          </View>
          <View style={[styles.row, styles.rightWeather]}>
            <Text style={styles.detailsText}>{currentCity?.weather[0]?.main}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  bottomContainer: {
    height: "35%"
  },
  subBottomContainer: {
    width: "5%"
  },
  cityView: {
    width: "45%"
  },
  detailContainer: {
    justifyContent: "center", height: "25%"
  },
  detailList: {
    height: "75%"
  },
  rightBottom: { width: "50%" },

  subView: {
    justifyContent: "flex-end",
    height: "35%"
  },
  temp: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: FONT_FAMILIES.CORBEL
  },
  rightBottom: {
    justifyContent: "center",
    height: "65%"
  },
  detailsText: {
    fontSize: 16,
    marginBottom: 5,
    fontFamily: FONT_FAMILIES.CORBEL
  },
  row: {
    flexDirection: "row"
  },
  column: {
    flexDirection: "column"
  },
  justifyCenter: {
    justifyContent: "center"
  },
});
export default MapDetail;
