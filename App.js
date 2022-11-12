import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, StyleSheet } from "react-native";
import Home from "./src/screens/Home";
import Details from "./src/screens/Details";
import SignIn from "./src/screens/SignIn";
import SignUp from "./src/screens/SignUp";

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* auth  */}
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />

        {/* content  */}
        <Stack.Screen name="Home" component={Home} options={{ title: 'Welcome' }} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
