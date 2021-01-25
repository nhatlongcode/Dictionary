import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  useColorScheme,
  ScrollView,
} from 'react-native';
import Screens from '../screens/Screens';
import Data from '../Data/Data';

const SearchBar = ({navigation}) => {
  const [input, setInput] = useState('');

  const Search = () => {
    Data.Instance().GetHtml(input, MoveToWordScreen);
  };

  const MoveToWordScreen = (html, word) => {
    navigation.navigate(Screens.Word, {
      contentHtml: html,
      title: word,
    });
  };

  const OnChangeInput = (text) => {
    setInput(text.toLowerCase());
  };

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.searchBox}>
          <View style={styles.inputField} on>
            <TextInput
              placeholder="search"
              onChangeText={OnChangeInput}
              onSubmitEditing={Search}
            />
          </View>
          <View style={{justifyContent: 'center'}}>
            <Text
              style={{
                fontSize: 20,
              }}>
              X
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBox: {
    margin: 'auto',
    backgroundColor: 'white',
    borderRadius: 10,
    paddingBottom: 2,
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
    opacity: 100,
    width: '80%',
    height: '35%',
    borderWidth: 0,
  },
  container: {
    justifyContent: 'center',
    height: 150,
    backgroundColor: '#51ABF0',
    alignItems: 'center',
  },
  inputField: {
    width: '90%',
  },
});

export default SearchBar;
