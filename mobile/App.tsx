import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AppLoading } from 'expo';
import {
  useFonts,
  Ubuntu_400Regular,
  Ubuntu_700Bold
} from '@expo-google-fonts/ubuntu';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

// Pages
import Home from './src/pages/Home'
import Another from './src/pages/Another';

const Stack = createStackNavigator()

export default function App() {

  const [fontsLoaded] = useFonts({
    Ubuntu_400Regular,
    Ubuntu_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <NavigationContainer>
        <StatusBar />
        <Stack.Navigator headerMode='none' screenOptions={{cardStyle: {backgroundColor: '#0B1F34'}}}>
            <Stack.Screen name="Home" component={ Home }/>
            <Stack.Screen name="another" component={ Another }/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}




