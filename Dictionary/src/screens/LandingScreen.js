import React, {useState} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import Screens from './Screens';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SearchBar from '../components/SearchBar';
import MenuButton from '../components/MenuButton';

const LandingScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <SearchBar navigation={navigation} />
      </View>
      <View>
        <MenuButton 
          navigation={navigation}
          icon='google'
          title='Search with google translate'
          navigateTo={Screens.Search}
        />
        <MenuButton 
          navigation={navigation}
          icon='book'
          title='Viet - Anh Dictionary'
          navigateTo={Screens.Search}
        />
        <MenuButton 
          navigation={navigation}
          icon='bookmark'
          title='Favorite words'
          navigateTo={Screens.Search}
        />
        <MenuButton 
          navigation={navigation}
          icon='graduation-cap'
          title='Take exam'
          navigateTo={Screens.Search}
        />
        <MenuButton 
          navigation={navigation}
          icon='cog'
          title='Setting'
          navigateTo={Screens.Search}
        />
        <MenuButton 
          navigation={navigation}
          icon='info-circle'
          title='Info'
          navigateTo={Screens.Search}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 40,
    width: '40%',
    backgroundColor: 'cyan',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  searchBar: {
    top: 0,
  },
});

export default LandingScreen;
