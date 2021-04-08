import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { navigationRef } from "./utils";
import Home from "./Home";
import MapDetails from "./MapDetails";
import SplashScreen from "./Splash";

const Stack = createStackNavigator();

export default function AppContainer() {
  const [splash, setSplash] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 1500);
  }, []);
  return (
    <NavigationContainer ref={navigationRef}>
      {
        splash
          ?
          <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name="Splash" component={SplashScreen} />
          </Stack.Navigator>
          :
          <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="MapDetail" component={MapDetails} />
          </Stack.Navigator>
      }
    </NavigationContainer>
  );
}

