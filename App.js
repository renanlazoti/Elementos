import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { format } from './screens/MainScreen/css/Styles.js';
import MainScreen from './screens/MainScreen/';
import CameraScreen from './screens/CameraScreen/';
import GalleryScreen from './screens/GalleryScreen/';
import CodebarScreen from './screens/CodebarScreen/';
import MapScreen from './screens/MapScreen/';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
 
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MainScreen" component={MainScreen} options={{headerShown:false}} />
        <Stack.Screen name="CameraScreen" component={CameraScreen} />
        <Stack.Screen name="GalleryScreen" component={GalleryScreen} />
        <Stack.Screen name="CodebarScreen" component={CodebarScreen} />
        <Stack.Screen name="MapScreen" component={MapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
