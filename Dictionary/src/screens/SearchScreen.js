import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { View } from 'react-native';
import Screens from './Screens'
import Data from '../Data/Data'

const SearchScreen = ({navigation}) => {

    const [input, setInput] = useState('');

    const Search = () =>
    {
        Data.Instance().GetHtml(input, MoveToWordScreen);
    }

    const MoveToWordScreen = (html) =>
    {
        navigation.navigate(Screens.Word, 
            {
                contentHtml: html,
            });
    }

    const OnChangeInput = (text) =>
    {
        setInput(text);
    }

    return(
        <View>
            <TextInput
                placeholder="search"
                onChangeText = {OnChangeInput}
                onSubmitEditing={Search}
            />
        </View>
    );
}

export default SearchScreen;