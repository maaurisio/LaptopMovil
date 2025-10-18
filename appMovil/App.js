import 'react-native-gesture-handler';
import 'react-native-reanimated';
import React from "react";
import { NavigationContainer } from "@react-navigation/native"; 
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LaptopList } from '../appMovil/screens/LaptopList';

const StackContacts = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StackContacts.Navigator>
        <StackContacts.Screen
          name="LaptopListNav"
          component={LaptopList}
        />
      </StackContacts.Navigator>
    </NavigationContainer>
  );
}
