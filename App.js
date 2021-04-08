import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Colors from './src/config/Colors';

import { createStackNavigator } from '@react-navigation/stack';
import AppContainer from './src/screen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.cover}>
        <AppContainer/>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  cover: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: Colors.LightBlue,
  },
  motherContainer: {
    backgroundColor: Colors.Primary,
  },
});

export default App;
