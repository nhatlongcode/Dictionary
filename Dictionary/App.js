import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from './src/screens/LandingScreen'
import ComponentScreen from './src/screens/ComponentScreen'
import Screens from './src/screens/Screens'
import SearchScreen from './src/screens/SearchScreen';
import WordScreen from './src/screens/WordScreen';

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Screens.Home}>
        <Stack.Screen name={Screens.Home} component={LandingScreen}/>
        <Stack.Screen name={Screens.Component} component={ComponentScreen}/>
        <Stack.Screen name={Screens.Search} component={SearchScreen}/>
        <Stack.Screen name={Screens.Word} component={WordScreen}/>
      </Stack.Navigator>
  </NavigationContainer>
  );
}

const Stack = createStackNavigator();


export default App;