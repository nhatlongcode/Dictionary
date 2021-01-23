import React from 'react'
import {Image} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from './src/screens/LandingScreen'
import ComponentScreen from './src/screens/ComponentScreen'
import Screens from './src/screens/Screens'
import SearchScreen from './src/screens/SearchScreen';
import WordScreen from './src/screens/WordScreen';

function LogoTitle() {
  return (
    <Image
      style={{ width: 180, height: 50, marginTop: 15 }}
      source={require('./src/image/logo.png')}
    />
  );
}

const App = () => {


  return(
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName={Screens.Home}
        screenOptions={{
          headerStyle: {
            backgroundColor: '#6FC9E7',
            shadowOpacity: 0,
            elevation: 0,
          },
          headerTintColor: '#2C1100',
        }}
      >
        <Stack.Screen 
          name={Screens.Home} 
          component={LandingScreen} 
          options={{ headerTitle: props => <LogoTitle {...props} /> }}
        />
        <Stack.Screen name={Screens.Component} component={ComponentScreen}/>
        <Stack.Screen name={Screens.Search} component={SearchScreen}/>
        <Stack.Screen name={Screens.Word} component={WordScreen}
        options={({ route }) => ({ title: route.params.title })}/>
      </Stack.Navigator>
  </NavigationContainer>
  );
}

const Stack = createStackNavigator();


export default App;