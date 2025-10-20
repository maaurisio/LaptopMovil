import 'react-native-gesture-handler';
import 'react-native-reanimated';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LaptopList } from '../appMovil/screens/LaptopList';
import { LaptopsForm } from '../appMovil/screens/LaptopsForm';

const StackContacts = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StackContacts.Navigator initialRouteName='LaptopListNav'>
        <StackContacts.Screen
          name="LaptopListNav"
          component={LaptopList}
        />
        <StackContacts.Screen
          name="LaptopFormNav"
          component={LaptopsForm}
        />
      </StackContacts.Navigator>
    </NavigationContainer>
  );
}
