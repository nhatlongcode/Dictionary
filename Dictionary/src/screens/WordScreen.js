import React from 'react'
import { View } from 'react-native';
import WordCard from '../components/WordCard';

const WordScreen = ({route, navigation}) => {
    const {contentHtml} = route.params;

    return(
        <View>
            <WordCard html={contentHtml}/>
        </View>
    );
}

export default WordScreen;