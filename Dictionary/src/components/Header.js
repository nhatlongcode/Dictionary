import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Button,
  ToastAndroid,
  TouchableOpacity,
  useColorScheme,
  ScrollView,
} from 'react-native';
import SearchBar from '../components/SearchBar';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Button title="asd" />
        <SearchBar />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 80,
    backgroundColor: 'cyan',
    top: 0,
  },
  container: {
    flexDirection: 'column',
  },
});

export default Header;
