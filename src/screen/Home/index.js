import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import SmallCard from '../../components/smallCard/SmallCard';
import { getCitiesData } from '../../redux/action/GetCitiesAction';
import Colors from '../../config/Colors';
import Header from '../../components/Header/Header';
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();
  const gatheredCites = useSelector(state => state?.GetCitiesReducer?.gatheredCites);
  const dispatch = useDispatch();
  useEffect(() => {
    navigation.addListener("focus", () => {
      dispatch(getCitiesData());
    });
  }, []);
  return (
    <View style={styles.container}>
      <Header back={false} />
      <FlatList
        data={gatheredCites}
        renderItem={({ item, index }) => <SmallCard
          detail={item}
          index={index}
        />
        }
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White,
  },
});
export default React.memo(Home);
